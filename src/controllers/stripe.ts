import type { Request, Response } from 'express'
// import orders from '@/services/orders'
// import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'STRIPE_SECRET_KEY', {
  apiVersion: '2023-10-16',
  appInfo: {
    // For sample support and debugging, not required for production:
    name: 'internet-orders-api',
    url: 'https://github.com/krisbelangernelson/internet-orders-api',
    version: '1.0.0'
  },
  typescript: true
})

interface PaymentBody {
  plan: string
}

const calculateOrderAmount = (plan: string): number => {
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  if (plan === 'home-fiber1000') return 110

  return 0
}

const stripeConfig = (_req: Request, res: Response): void => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  })
}

const stripePaymentIntent = async (req: Request, res: Response): Promise<void> => {
  const { plan } = req.body as PaymentBody

  const params = {
    amount: calculateOrderAmount(plan),
    currency: 'cad',
    automatic_payment_methods: {
      enabled: true
    }
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create(params)

    res.send({
      amount: calculateOrderAmount(plan),
      clientSecret: paymentIntent.client_secret
    })
  } catch (e) {
    res.status(400).send({
      error: {
        message: (e as Error).message
      }
    })
  }
}

export { stripeConfig, stripePaymentIntent }
