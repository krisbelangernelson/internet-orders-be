/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import invalidRoutes from './invalidRoutes'
import { stripeConfig, stripePaymentIntent } from '@/controllers/stripe'

const router = Router()

router.get('/config', stripeConfig)
router.post('/create-payment-intent', stripePaymentIntent)
router.use('*', invalidRoutes)

export default router
