const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@example.com',
      wallet: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
      // and other fields you want to set
    },
  });
  console.log('Created new user: ', newUser);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
