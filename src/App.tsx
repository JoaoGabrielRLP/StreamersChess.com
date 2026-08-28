import './App.css'
import { AppContent } from './components/AppContent/AppContent'
import { SearchBar } from './components/SearchBar/SearchBar'
import { usePagination } from './hooks/usePagination'
import { useStreamers } from './hooks/useStreamers'

function App() {
  const { streamers, search, searchTerm, isLoading, error, reload } = useStreamers()
  const pagination = usePagination(streamers)

  function handleReload() {
    pagination.resetPage()
    void reload()
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Chess live directory</p>
        <h1>Streamers de xadrez</h1>
        <p>Acompanhe quem está transmitindo partidas e análises agora.</p>
      </header>
      <SearchBar key={searchTerm} initialValue={searchTerm} onSearch={(term) => {
        if (search(term)) {
          pagination.resetPage()
        }
      }} />
      <section className="streamers-section" aria-live="polite">
        <AppContent
          streamers={streamers}
          pageStreamers={pagination.items}
          searchTerm={searchTerm}
          isLoading={isLoading}
          error={error}
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          hasPreviousPage={pagination.hasPreviousPage}
          hasNextPage={pagination.hasNextPage}
          onPrevious={pagination.previousPage}
          onNext={pagination.nextPage}
          onReload={handleReload}
        />
      </section>
    </main>
  )
}

export default App
