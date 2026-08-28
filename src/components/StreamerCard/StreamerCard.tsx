import type { Streamer } from '../../types/streamer'
import { PlatformLinks } from '../PlatformLinks/PlatformLinks'
import { StreamerAvatar } from '../StreamerAvatar/StreamerAvatar'
import './StreamerCard.css'

interface StreamerCardProps {
  streamer: Streamer
}

export function StreamerCard({ streamer }: StreamerCardProps) {
  return (
    <article className={`streamer-card${streamer.is_live ? ' streamer-card--live' : ''}`}>
      <StreamerAvatar username={streamer.username} avatar={streamer.avatar} />
      <div className="streamer-card__identity">
        <h2>{streamer.username}</h2>
        <p className="streamer-card__status">
          <span className="streamer-card__status-dot" aria-hidden="true" />
          {streamer.is_live ? 'Online' : 'Offline'}
        </p>
      </div>
      <PlatformLinks platforms={streamer.platforms} username={streamer.username} />
    </article>
  )
}
