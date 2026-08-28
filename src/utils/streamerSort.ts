import type { Streamer } from '../types/streamer'

export function sortStreamersByUsername(streamers: Streamer[]): Streamer[] {
  return [...streamers].sort((left, right) =>
    left.username.localeCompare(right.username, undefined, { sensitivity: 'base' }),
  )
}
