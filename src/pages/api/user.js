import { PrismaClient } from "@prisma/client";
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from '../../../ironSessionConfig';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { method, query: { wallet } } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await prisma.user.findUnique({
          where: {
            wallet: wallet,
          },
        });
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the user.' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

module.exports = withIronSessionApiRoute(handler, ironOptions);
