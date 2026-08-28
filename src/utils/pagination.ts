export const PAGE_SIZE = 10

export interface PaginationResult<T> {
  items: T[]
  currentPage: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export function paginate<T>(
  items: T[],
  currentPage = 1,
  pageSize = PAGE_SIZE,
): PaginationResult<T> {
  const totalPages = Math.ceil(items.length / pageSize)
  const hasPreviousPage = currentPage > 1 && totalPages > 0
  const hasNextPage = currentPage < totalPages
  const startIndex = (currentPage - 1) * pageSize

  return {
    items: startIndex >= 0 && startIndex < items.length ? items.slice(startIndex, startIndex + pageSize) : [],
    currentPage,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  }
}
