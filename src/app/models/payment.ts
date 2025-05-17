export type Payment = {
  typePayment : string
  amount: number
}

export type PaymentCreate = Omit<Payment, 'typePayment' | 'amount' >
