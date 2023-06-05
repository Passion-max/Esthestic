import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const profileImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const featureImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

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

export default async function handle(req, res) {
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
          res.status(200).json(user);
        }
      } else {
        const users = 'NO users';
        res.status(200).json({message: users});
      }
      break;
    case "POST":
      const { wallet } = req.body;
      const newUser = await createUser(wallet);
      res.status(201).json(newUser);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
