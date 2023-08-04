// import prisma client
import prisma from "./prisma";

// instantiate prisma
const prisma = new PrismaClient()

async function main() {
  // create new categories
  await prisma.category.createMany({
    data: [
      { name: 'Art', description: 'This category includes digital and physical pieces of artwork, such as paintings, drawings, and sculptures.' },
      { name: 'Music', description: 'This category includes musical compositions, tracks, albums, and related content.' },
      { name: 'PFP', description: 'This category, standing for Profile Picture, includes NFTs designed to be used as unique digital profile images.' },
      { name: 'Gaming', description: 'This category includes digital assets related to video games, such as in-game items, characters, and environments.' },
      { name: 'Domain Name', description: 'This category includes digital domain names that can be bought, sold, or used for websites.' }
    ]
  })
}

// call the function
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
