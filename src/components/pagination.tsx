import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'
import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
} from './ui/pagination'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export default function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <p className="text-nowrap text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </p>

        <ShadPagination>
          <PaginationContent>
            <PaginationItem>
              <Button
                disabled={pageIndex === 0}
                onClick={() => onPageChange(0)}
                variant="outline"
                size="sm"
                className="size-8 p-0"
              >
                <ChevronsLeft className="size-4" />
                <span className="sr-only">Voltar para o início</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                disabled={pageIndex === 0}
                onClick={() => onPageChange(pageIndex - 1)}
                variant="outline"
                size="sm"
                className="size-8 p-0"
              >
                <ChevronLeft className="size-4" />
                <span className="sr-only">Voltar para o anterior</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                disabled={pageIndex === pages - 1}
                onClick={() => onPageChange(pageIndex + 1)}
                variant="outline"
                size="sm"
                className="size-8 p-0"
              >
                <ChevronRight className="size-4" />
                <span className="sr-only">Avançar para o próximo</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <Button
                disabled={pageIndex === pages - 1}
                onClick={() => onPageChange(pages - 1)}
                variant="outline"
                size="sm"
                className="size-8 p-0"
              >
                <ChevronsRight className="size-4" />
                <span className="sr-only">Avançar para o final</span>
              </Button>
            </PaginationItem>
          </PaginationContent>
        </ShadPagination>
      </div>
    </div>
  )
}
