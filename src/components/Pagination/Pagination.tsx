import './Pagination.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  onPrevious: () => void
  onNext: () => void
}

export function Pagination({
  currentPage,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  onPrevious,
  onNext,
}: PaginationProps) {
  return (
    <nav className="pagination" aria-label="Paginação de streamers">
      <button type="button" onClick={onPrevious} disabled={!hasPreviousPage}>
        <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        Anterior
      </button>
      <span aria-live="polite">Página {currentPage} de {Math.max(totalPages, 1)}</span>
      <button type="button" onClick={onNext} disabled={!hasNextPage}>
        Próximo
        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
      </button>
    </nav>
  )
}
