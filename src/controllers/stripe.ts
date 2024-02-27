import type { Request, Response } from 'express'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'
import * as stripe from '@/services/stripe'
import type { PaymentBody } from '@/types/payment'

const stripeConfig = (_req: Request, res: Response): void => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  })
}

const stripePaymentIntent = async (req: Request, res: Response): Promise<void> => {
  try {
    const paymentResponse = await stripe.stripePaymentIntent(req.body as PaymentBody)
    res.send(paymentResponse)
  } catch (e) {
    errorResponses(
      res,
      { code: 'ERR-400', reason: 'Bad Request', message: (e as Error).message },
      'stripePaymentIntent'
    )
  }
}

export { stripeConfig, stripePaymentIntent }
