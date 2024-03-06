import type { CreateOrder } from '@/types/order'
import { insertOrder } from '@/db/queries/orders'

export const createOrder = async (body: CreateOrder): Promise<object> => {
  await insertOrder(body)
  return { code: '0' }
}
