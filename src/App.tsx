import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { usePagination } from './hooks/usePagination'
import { useStreamers } from './hooks/useStreamers'

function App() {
  const { streamers, search, isLoading, error } = useStreamers()
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
            <ul className="streamers-list">
              {pagination.items.map((streamer) => (
                <li key={streamer.username}>
                  <strong>{streamer.username}</strong>
                  <span>{streamer.is_live ? 'Online' : 'Offline'}</span>
                </li>
              ))}
            </ul>
            <nav className="pagination" aria-label="Paginação de streamers">
              <button type="button" onClick={pagination.previousPage} disabled={!pagination.hasPreviousPage}>
                Anterior
              </button>
              <span>Página {pagination.currentPage} de {Math.max(pagination.totalPages, 1)}</span>
              <button type="button" onClick={pagination.nextPage} disabled={!pagination.hasNextPage}>
                Próximo
              </button>
            </nav>
          </>
        )}
      </section>
    </main>
  )
}

export default App
