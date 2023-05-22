import { withIronSessionApiRoute } from 'iron-session/next'
const { SiweMessage } = require('siwe')
import { ironOptions } from '../../../ironSessionConfig'


const handler = async (req, res) => {
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const { message, signature } = req.body
        const siweMessage = new SiweMessage(message)
        const fields = await siweMessage.verify(signature)

        if (fields.nonce !== req.session.get('nonce'))
          return res.status(422).json({ message: 'Invalid nonce.' })

        req.session.set('siwe', fields)
        await req.session.save()
        res.json({ ok: true })
      } catch (_error) {
        res.json({ ok: false })
      }
      break
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

module.exports = withIronSessionApiRoute(handler, ironOptions)
