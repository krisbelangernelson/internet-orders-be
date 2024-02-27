import { getDb } from '@/db/connection'
import { type InternetService } from '@/types/services'

const createOrder = async (): Promise<InternetService[]> => {
  const db = getDb()
  const select =
    'SELECT ins.name, label, description, bandwidth_down, bandwidth_up, price, ideal_num_users, ideal_num_devices, sc.name AS category, ct.name AS type  FROM internet_service AS ins, service_category AS sc, connection_type AS ct WHERE ins.service_category_id = sc.id AND ins.connection_type_id = ct.id'

  const result = await db.query(select)

  return await Promise.resolve(result.rows)
}

export default { createOrder }
