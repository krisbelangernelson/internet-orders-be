import type { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '@/utils/httpErrors'
import { errorResponses } from '@/utils/httpErrors/errorResponses'
import { type Error } from '@/types/error'
import { type CreateOrder } from '@/types/order'

export const verifyOrder = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { offerId, line1, city, state, postal_code: postalCode, customerId } = req.body as CreateOrder

    if (offerId === undefined) {
      throw new BadRequestError('offerId', offerId)
    } else if (line1 === undefined) {
      throw new BadRequestError('line1', line1)
    } else if (city === undefined) {
      throw new BadRequestError('city', city)
    } else if (state === undefined) {
      throw new BadRequestError('state', state)
    } else if (postalCode === undefined) {
      throw new BadRequestError('postalCode', postalCode)
    } else if (customerId === undefined) {
      throw new BadRequestError('customerId', customerId)
    } else {
      next()
    }
  } catch (error) {
    errorResponses(res, error as Error, 'verifyOrder')
  }
}
