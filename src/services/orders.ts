import type { CreateOrder } from '@/types/order'
import type { OrderModel } from '@/models/pg'

export const createOrder = (orderModel: OrderModel) => async (body: CreateOrder) => {
  const order = await orderModel.create(body)
  return order
}
