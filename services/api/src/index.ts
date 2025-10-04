import Fastify from 'fastify'
import { PaymentIntent } from '@org/shared'

const app = Fastify({ logger: true })

app.get('/health', async () => ({ ok: true }))

app.post('/intents', async (req, reply) => {
  // TODO: validate with Zod and sign server-side attestation
  reply.code(201).send({ id: 'intent_000', status: 'created' })
})

app.listen({ port: 3001, host: '0.0.0.0' }).catch((err) => {
  app.log.error(err)
  process.exit(1)
})
