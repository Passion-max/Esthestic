import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const profileImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const featureImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

const getRandomImage = (images) => images[Math.floor(Math.random() * images.length)];

const userDbFunctions = {
    async getUser(wallet) {
      return await prisma.user.findUnique({
        where: {
          wallet: wallet,
        },
      });
    },
  
    async createUser(wallet) {
      const profile_image = getRandomImage(profileImages);
      const feature_image = getRandomImage(featureImages);
  
      return await prisma.user.create({
        data: {
          username: 'unnamed',
          profile_image: profile_image,
          feature_image: feature_image,
          network: 'Ethereum',
          wallet: wallet,
        },
      });
    },
  
    async checkUser(wallet) {
      const existingUser = await this.getUser(wallet);
  
      if (existingUser) {
        return existingUser;
      } else {
        return await this.createUser(wallet);
      }
    },
  };
  
  export default userDbFunctions;
  

