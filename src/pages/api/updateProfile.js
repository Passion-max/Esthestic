// pages/api/updateProfile.js
import prisma from "./prisma";
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../../ironSessionConfig";
import validator from 'validator';


export const config = {
  api: {
    bodyParser: true,
  },
};

const validateFields = (fields) => {
    const { username, desc, email, url, twitter, facebook } = fields;
  
    if (!username || !desc || !email) {
      return 'Username, description, and email are required';
    }
  
    if (!validator.isEmail(email)) {
      return 'Email is not valid';
    }
  
    if (url && !validator.isURL(url)) {
      return 'URL is not valid';
    }
  
    if (twitter && !/^@(\w){1,15}$/.test(twitter)) {
      return 'Twitter handle is not valid';
    }
  
    if (facebook && !/^[a-z\d.]{5,}$/i.test(facebook)) {
      return 'Instragram user is not valid';
    }
  
    return null;
  };

  const handle = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  
  const user = req.session.user;
  
  // Verify user is authenticated
  if (!user) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  
  const validationError = validateFields(req.body);

console.log(user)
  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  // Check if the email is already used by another user
  const existingUserWithEmail = await prisma.user.findFirst({ where: { email: req.body.email } });
  if (existingUserWithEmail && existingUserWithEmail.id !== user.user.id) {
    return res.status(400).json({ success: false, message: "Email is already in use" });
  }

//   // Update user record in the database
  const updatedUser = await prisma.user.update({
    where: { id: user.user.id },
    data: req.body,
  });

  req.session.user = updatedUser;

  res.status(200).json({ success: true, user: updatedUser });
}

export default withIronSessionApiRoute(handle, ironOptions);
