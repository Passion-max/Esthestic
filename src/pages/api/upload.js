// upload.js
import multer from 'multer';
import prisma from './prisma';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from '../../../ironSessionConfig';
import cloudinary from '../../contexts/cloudinary'
import streamifier from 'streamifier';

const upload = multer(); // Initializes multer

const handle = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const type = req.query.type;
  const user = req.session.user;

  // Verify user is authenticated
  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // Check if the request has an image
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No image provided" });
  }

  try {
    // Upload file to Cloudinary
    let result = await new Promise((resolve, reject) => {
      let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
        { folder: type === 'profile' ? 'profiles' : "features" },
        function(error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(cld_upload_stream);
    });

    console.log(result);
    
    // Update user record in the database
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: type === 'profile' ? { profile_image: result.url } : { feature_image: result.url },
    });

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ success: false, message: "An error occurred while processing the request" });
  }
}

export default withIronSessionApiRoute(upload.single('image')(handle), ironOptions);
