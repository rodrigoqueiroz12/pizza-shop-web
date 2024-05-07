export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export default function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="size-2 rounded-full bg-slate-400"
        />
      )}

      {status === 'canceled' && (
        <span data-testid="badge" className="size-2 rounded-full bg-rose-400" />
      )}

      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="size-2 rounded-full bg-amber-400"
        />
      )}

      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="size-2 rounded-full bg-emerald-400"
        />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
