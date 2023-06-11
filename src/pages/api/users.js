import { PrismaClient } from "@prisma/client";
import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from '../../../ironSessionConfig'

const prisma = new PrismaClient();

const profileImages = ["https://res.cloudinary.com/duo8vqicm/image/upload/v1686400537/profiles/2_w7ipm2.jpg", 
"https://res.cloudinary.com/duo8vqicm/image/upload/v1686400537/profiles/5_n82kff.jpg", 
"https://res.cloudinary.com/duo8vqicm/image/upload/v1686400537/profiles/4_kj9qpl.jpg", 
"https://res.cloudinary.com/duo8vqicm/image/upload/v1686400537/profiles/3_ixtdjg.jpg", 
"https://res.cloudinary.com/duo8vqicm/image/upload/v1686400537/profiles/6_cpgkyo.jpg"];
const featureImages = [
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401069/features/5_o3aryv.jpg", 
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401069/features/1_njv3fk.jpg", 
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401068/features/2_nvlg1q.jpg", 
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401069/features/4_dcsvns.jpg", 
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401069/features/3_wss6fl.jpg",
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401093/features/6_qeraj9.jpg",
  "https://res.cloudinary.com/duo8vqicm/image/upload/v1686401093/features/7_gqsyw5.jpg"
];

const getRandomImage = (images) =>
  images[Math.floor(Math.random() * images.length)];

const getUser = async (wallet) => {
  return await prisma.user.findUnique({
    where: {
      wallet: wallet,
    },
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const createUser = async (wallet) => {
  const profile_image = getRandomImage(profileImages);
  const feature_image = getRandomImage(featureImages);

  return await prisma.user.create({
    data: {
      username: "unnamed",
      profile_image: profile_image,
      feature_image: feature_image,
      network: "Ethereum",
      wallet: wallet,
    },
  });
};

const handle = async (req, res) => {
  const {
    method,
    query: { wallet },
  } = req;

  switch (method) {
    case "GET":
      if (wallet) {
        const user = await getUser(wallet);
        if (!user) {
          res.status(404).json({ message: "User not found" });
        } else {
          req.session.user = {user};
          await req.session.save();
          res.status(200).json(user);
        }
      } else {
        const users = await getAllUsers();
        res.status(200).json(users);
      }
      break;
    case "POST":
      const { wallet } = req.body;
      const newUser = await createUser(wallet);
      req.session.user = {newUser};
      await req.session.save();
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default withIronSessionApiRoute(handle, ironOptions);