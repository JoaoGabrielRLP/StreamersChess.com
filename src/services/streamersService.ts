import type { Platform, Streamer, StreamersApiResponse } from '../types/streamer'

const STREAMERS_URL = 'https://api.chess.com/pub/streamers'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function toPlatform(value: unknown): Platform | null {
  if (!isRecord(value) || typeof value.type !== 'string' || typeof value.channel_url !== 'string') {
    return null
  }

  return {
    type: value.type,
    channel_url: value.channel_url,
    is_live: value.is_live === true,
    is_main_live_platform: value.is_main_live_platform === true,
  }
}

function toStreamer(value: unknown): Streamer | null {
  if (!isRecord(value) || typeof value.username !== 'string') {
    return null
  }

  const platforms = Array.isArray(value.platforms)
    ? value.platforms.map(toPlatform).filter((platform): platform is Platform => platform !== null)
    : []

  return {
    username: value.username,
    avatar: typeof value.avatar === 'string' ? value.avatar : '',
    is_live: value.is_live === true,
    platforms,
  }
}

function parseResponse(value: unknown): StreamersApiResponse {
  if (!isRecord(value) || !Array.isArray(value.streamers)) {
    const error = new Error('Resposta invalida da API de streamers.')
    error.name = 'StreamersApiError'
    throw error
  }

  return {
    streamers: value.streamers
      .map(toStreamer)
      .filter((streamer): streamer is Streamer => streamer !== null),
  }
}

export async function fetchStreamers(): Promise<Streamer[]> {
  const response = await fetch(STREAMERS_URL)

  if (!response.ok) {
    const error = new Error(`A API de streamers respondeu com HTTP ${response.status}.`)
    error.name = 'StreamersApiError'
    throw error
  }

  return parseResponse(await response.json()).streamers
}
