import { withIronSessionApiRoute } from "iron-session/next";
import { generateNonce } from "siwe";
import { ironOptions } from "../../../ironSessionConfig";

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        req.session.nonce = generateNonce();
        await req.session.save();
        
      } catch (error) {
        console.log("Error in /api/nonce", error);
      }
      res.setHeader("Content-Type", "text/plain");
      res.send(req.session.nonce)

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
 

};

export default withIronSessionApiRoute(handler, ironOptions);
