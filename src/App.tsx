import './App.css'
import { Pagination } from './components/Pagination/Pagination'
import { SearchBar } from './components/SearchBar/SearchBar'
import { StreamerList } from './components/StreamerList/StreamerList'
import { usePagination } from './hooks/usePagination'
import { useStreamers } from './hooks/useStreamers'

function App() {
  const { streamers, search, isLoading, error, reload } = useStreamers()
  const pagination = usePagination(streamers)

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Chess live directory</p>
        <h1>Streamers de xadrez</h1>
        <p>Acompanhe quem está transmitindo partidas e análises agora.</p>
      </header>
      <SearchBar onSearch={(term) => {
        if (search(term)) {
          pagination.resetPage()
        }
      }} />
      <section className="streamers-section" aria-live="polite">
        {isLoading && <p>Carregando streamers...</p>}
        {error && <p role="alert">Não foi possível carregar os streamers.</p>}
        {!isLoading && !error && (
          <>
            <StreamerList streamers={pagination.items} onReload={reload} />
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              hasPreviousPage={pagination.hasPreviousPage}
              hasNextPage={pagination.hasNextPage}
              onPrevious={pagination.previousPage}
              onNext={pagination.nextPage}
            />
          </>
        )}
      </section>
    </main>
  )
}

export default App
