export interface Order {
  id: number
  service_id: number
  customer_id: number
  service_street: string
  service_city: string
  service_province: string
  service_postal_code: string
  state: number
  order_date: string
}

export interface CreateOrder {
  offerId: string
  line1: string
  line2: string | null
  city: string
  state: string
  country: string
  postal_code: string
  customerId: string
}
