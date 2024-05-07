import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthReceipt } from '@/api/get-month-receipt'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export default function MonthRevenueCard() {
  const { data: monthReceipt } = useQuery({
    queryFn: getMonthReceipt,
    queryKey: ['metrics', 'month-revenue'],
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthReceipt ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthReceipt.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>

            <p className="text-xs text-muted-foreground">
              {monthReceipt.diffFromLastMonth >= 0 ? (
                <>
                  <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                    +{monthReceipt.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="font-semibold text-rose-500 dark:text-rose-400">
                    {monthReceipt.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
