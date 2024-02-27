export interface PaymentBody {
  plan: string
}

export interface PaymentResponse {
  amount: number
  clientSecret: string | null
}
