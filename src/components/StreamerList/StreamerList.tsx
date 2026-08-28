import type { Streamer } from '../../types/streamer'
import { StreamerCard } from '../StreamerCard/StreamerCard'
import './StreamerList.css'

interface StreamerListProps {
  streamers: Streamer[]
  onReload: () => void
}

export function StreamerList({ streamers, onReload }: StreamerListProps) {
  if (streamers.length === 0) {
    return (
      <div className="streamer-list__empty">
        <p>Nenhum streamer nesta página.</p>
        <button type="button" onClick={onReload}>
          <i className="fa-solid fa-rotate-right" aria-hidden="true" />
          Recarregar
        </button>
      </div>
    )
  }

  return (
    <ul className="streamer-list">
      {streamers.map((streamer) => (
        <li key={streamer.username}>
          <StreamerCard streamer={streamer} />
        </li>
      ))}
    </ul>
  )
}
