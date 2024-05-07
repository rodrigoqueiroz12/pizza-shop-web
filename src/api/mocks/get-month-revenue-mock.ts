import { http, HttpResponse } from 'msw'

import { GetMonthReceiptResponse } from '../get-month-receipt'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthReceiptResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: 10,
  })
})
