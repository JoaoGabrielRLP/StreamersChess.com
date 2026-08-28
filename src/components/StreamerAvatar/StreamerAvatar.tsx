import { useState } from 'react'
import './StreamerAvatar.css'

interface StreamerAvatarProps {
  username: string
  avatar: string
}

export function StreamerAvatar({ username, avatar }: StreamerAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false)
  const accessibleName = `Avatar de ${username}`

  if (!avatar || hasImageError) {
    return (
      <span className="streamer-avatar streamer-avatar--fallback" role="img" aria-label={accessibleName} title={username}>
        <i className="fa-solid fa-user" aria-hidden="true" />
      </span>
    )
  }

  return (
    <img
      className="streamer-avatar"
      src={avatar}
      alt={accessibleName}
      title={username}
      onError={() => setHasImageError(true)}
    />
  )
}
