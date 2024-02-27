import type { Request, Response } from 'express'
import * as orders from '@/services/orders'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'

const createOrder = async (_req: Request, res: Response): Promise<void> => {
  await orders
    .createOrder()
    .then((results) => res.json(results))
    .catch((error: Error) => errorResponses(res, error, 'createOrder'))
}

export { createOrder }
