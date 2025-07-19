import type { Request, Response } from 'express'
import * as orderService from '@/services/orders'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'
import { type CreateOrder } from '@/types/order'
import { pgModel } from '@/models/pg'

const createOrderService = orderService.createOrder(pgModel)

const createOrder = async (req: Request, res: Response): Promise<void> => {
  await createOrderService(req.body as CreateOrder)
    .then((results) => res.status(201).json(results))
    .catch((error: Error) => errorResponses(res, error, 'createOrder'))
}

export { createOrder }
