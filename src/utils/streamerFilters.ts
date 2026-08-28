import type { Streamer } from '../types/streamer'

export function filterStreamersByUsername(streamers: Streamer[], searchTerm: string): Streamer[] {
  const normalizedTerm = searchTerm.trim().toLocaleLowerCase()

  if (!normalizedTerm) {
    return streamers
  }

  return streamers.filter((streamer) =>
    streamer.username.toLocaleLowerCase().includes(normalizedTerm),
  )
}

export function getInitialLiveStreamers(streamers: Streamer[]): Streamer[] {
  return streamers.filter((streamer) => streamer.is_live)
}
