import { PaymentIntent } from '@org/shared'

export function signIntent(intent: PaymentIntent): string {
  // TODO: EIP-712 signing
  return JSON.stringify(intent)
}
