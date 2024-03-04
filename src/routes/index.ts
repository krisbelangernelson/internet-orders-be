/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { createOrder } from '@/controllers/orders'
import stripe from '@/routes/stripe'
import invalidRoutes from './invalidRoutes'
import { version } from '../../package.json'
import { verifyOrder } from '@/middlewares/validations'

const router = Router()

router.get('/version', (_req, res) => {
  return res.send(`Version: ${version}`)
})

router.post('/api/v1/create-order', verifyOrder, createOrder)
// router.get('/api/v1/order/customer/:id', getOrderByCustomerId)
router.use('/api/v1/stripe', stripe)
router.use('*', invalidRoutes)

export default router
