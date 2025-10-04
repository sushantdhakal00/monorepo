import { z } from 'zod'

export const PaymentIntent = z.object({
  id: z.string().uuid().optional(),
  amount: z.string(),
  asset: z.string(),
  merchant: z.string(),
  slippageBps: z.number().int().nonnegative(),
  expiry: z.string(), // ISO datetime
  origin: z.string().url(),
  nonce: z.string()
})

export type PaymentIntent = z.infer<typeof PaymentIntent>
