import type { CreateOrder } from '@/types/order'
import { insertOrder } from '@/db/queries/orders'

export const createOrder = async (body: CreateOrder): Promise<object> => {
  await insertOrder(body)
  return { code: '0' }
}

// export const getOrderByCustomerId = async (id: string): Promise<Order[]> => {
//   return await findOrderByCustomerId(id)
// }
