import { useState } from 'react'
import { paginate, PAGE_SIZE } from '../utils/pagination'

export function usePagination<T>(items: T[], pageSize = PAGE_SIZE) {
  const [currentPage, setCurrentPage] = useState(1)
  const pagination = paginate(items, currentPage, pageSize)

  function nextPage() {
    if (pagination.hasNextPage) {
      setCurrentPage((page) => page + 1)
    }
  }

  function previousPage() {
    if (pagination.hasPreviousPage) {
      setCurrentPage((page) => page - 1)
    }
  }

  function resetPage() {
    setCurrentPage(1)
  }

  return { ...pagination, nextPage, previousPage, resetPage }
}
