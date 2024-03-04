import { getDb } from '@/db/connection'
import type { Order, CreateOrder } from '@/types/order'

export const insertOrder = async (params: CreateOrder): Promise<void> => {
  const { offerId, line1, line2, city, state, postal_code: postalCode, customerId } = params

  const db = getDb()

  const sql = `INSERT INTO internet_order(
      service_id,
      customer_id,
      service_street,
      service_city,
      service_province,
      service_postal_code,
      state
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`

  const values = [
    offerId.trim(),
    customerId.trim(),
    `${line1} ${line2}`.trim(),
    city.trim(),
    state.trim(),
    postalCode.trim(),
    '2'
  ]

  await db.query(sql, values, `createCustomer: DB error inserting customer.`)
}

export const findOrderByCustomerId = async (id): Promise<Order[]> => {
  const db = getDb()
  const select =
    'SELECT ins.name, label, description, bandwidth_down, bandwidth_up, price, ideal_num_users, ideal_num_devices, sc.name AS category, ct.name AS type  FROM internet_service AS ins, service_category AS sc, connection_type AS ct, internet_order, order_state WHERE ins.service_category_id = sc.id AND ins.connection_type_id = ct.id AND internet_order.service_id = ins.id AND internet_order.customer_id = $1 AND internet_order.state = order_state.id'

  const result = await db.query(select, [id])

  return await Promise.resolve(result.rows)
}
