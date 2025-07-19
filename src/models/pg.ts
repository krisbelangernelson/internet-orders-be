import { findOrderByCustomerId, insertOrder } from "@/db/queries/orders"
import type { CreateOrder, Order } from "@/types/order"

export interface OrderModel {
  create: (body: CreateOrder) => Promise<Order>
  findOrderByCustomerId: (id: string) => Promise<Order[]>
}

export const pgModel: OrderModel = {
  create: async (body: CreateOrder) => {
    return await insertOrder(body)
  },
  findOrderByCustomerId: async (id: string) => {
    return await findOrderByCustomerId(id)
  }
}