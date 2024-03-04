import type { Request, Response } from 'express'
import * as orders from '@/services/orders'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'

const createOrder = async (req: Request, res: Response): Promise<void> => {
  await orders
    .createOrder(req.body)
    .then((results) => res.json(results))
    .catch((error: Error) => errorResponses(res, error, 'createOrder'))
}

// const getOrderByCustomerId = async (req: Request, res: Response): Promise<void> => {
//   const { id } = req.params
//   await orders
//     .getOrderByCustomerId(id)
//     .then((results) => res.json(results))
//     .catch((error: Error) => errorResponses(res, error, 'getOrderByCustomerId'))
// }

export { createOrder }
