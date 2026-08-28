import type { Streamer } from '../../types/streamer'
import { EmptyState } from '../EmptyState/EmptyState'
import { ErrorState } from '../ErrorState/ErrorState'
import { LoadingState } from '../LoadingState/LoadingState'
import { Pagination } from '../Pagination/Pagination'
import { StreamerList } from '../StreamerList/StreamerList'

interface AppContentProps {
  streamers: Streamer[]
  pageStreamers: Streamer[]
  searchTerm: string
  isLoading: boolean
  error: Error | null
  currentPage: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
  onPrevious: () => void
  onNext: () => void
  onReload: () => void
}

export function AppContent({
  streamers,
  pageStreamers,
  searchTerm,
  isLoading,
  error,
  currentPage,
  totalPages,
  hasPreviousPage,
  hasNextPage,
  onPrevious,
  onNext,
  onReload,
}: AppContentProps) {
  if (isLoading) {
    return <LoadingState message={searchTerm ? 'Pesquisando streamers...' : undefined} />
  }

  if (error) {
    return <ErrorState error={error} onReload={onReload} />
  }

  if (searchTerm && streamers.length === 0) {
    return (
      <EmptyState
        title="Streamer não identificado"
        description={`Nenhum resultado encontrado para “${searchTerm}”.`}
      />
    )
  }

  return (
    <>
      <StreamerList streamers={pageStreamers} onReload={onReload} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasPreviousPage={hasPreviousPage}
        hasNextPage={hasNextPage}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  )
}
