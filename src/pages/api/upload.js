// upload.js
import prisma from "./prisma";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../ironSessionConfig";
import cloudinary from "../../contexts/cloudinary";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handle = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // const type = req.query.type;
  const user = req.session.user;

  // Verify user is authenticated
  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const form = formidable();
  let parsed = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
      console.log(fields, files);
    });
  });

  // Check if the request has an image
  const file = parsed.files.image;
  const type = parsed.fields.type[0];
  if (!file) {
    return res
      .status(400)
      .json({ success: false, message: "No image provided" });
  }


  try {
    // Upload file to Cloudinary using stream upload
    let filePath = file[0].filepath;
    let dataUri = await new Promise((resolve, reject) => {
      fs.readFile(filePath, { encoding: "base64" }, function(err, data) {
        if (err) {
          reject(err);
          return;
        }
    
        // Get file extension
        let ext = path.extname(file[0].originalFilename);
    
        // Format data: URI
        let dataUri = `data:image/${ext.slice(1)};base64,${data}`;
    
        resolve(dataUri);
      });
    });
    
        

    const folder = type === "profile" ? "profiles" : "features";

    const uploadedImageResponse = await cloudinary.uploader.upload(
      dataUri,
      { folder: folder, resource_type: "image" }
    );
   

    // // Update user record in the database
    const updatedUser = await prisma.user.update({
      where: { id: user.user.id },  // change this line
      data:
        type === "profile"
          ? { profile_image: uploadedImageResponse.url }
          : { feature_image: uploadedImageResponse.url },
    });

    req.session.user = {updatedUser};
    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: "An error occurred while processing the request",
    });
  }
};
export default withIronSessionApiRoute(handle, ironOptions);
