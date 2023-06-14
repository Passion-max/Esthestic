// src/pages/api/user.js

import { withIronSessionApiRoute } from 'iron-session/next'
import { ironOptions } from '../../../ironSessionConfig'

const handler = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      const user = req.session.user
      if(user) {
        res.status(200).json(user)
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default withIronSessionApiRoute(handler, ironOptions)
