export interface Platform {
  type: string
  channel_url: string
  is_live: boolean
  is_main_live_platform: boolean
}

export interface Streamer {
  username: string
  avatar: string
  is_live: boolean
  platforms: Platform[]
}

export interface StreamersApiResponse {
  streamers: Streamer[]
}
