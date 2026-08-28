import { useCallback, useEffect, useState } from 'react'
import { fetchStreamers } from '../services/streamersService'
import { filterStreamersByUsername, getInitialLiveStreamers } from '../utils/streamerFilters'
import { sortStreamersByUsername } from '../utils/streamerSort'
import type { Streamer } from '../types/streamer'

const REFRESH_INTERVAL_MS = 1000

export function useStreamers() {
  const [allStreamers, setAllStreamers] = useState<Streamer[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const loadStreamers = useCallback(async (showLoading: boolean) => {
    if (showLoading) {
      setIsLoading(true)
    }

    try {
      const streamers = await fetchStreamers()
      setAllStreamers(streamers)
      setError(null)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError : new Error('Falha ao carregar streamers.'))
    } finally {
      if (showLoading) {
        setIsLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    const initialLoadId = window.setTimeout(() => void loadStreamers(true), 0)
    const intervalId = window.setInterval(() => void loadStreamers(false), REFRESH_INTERVAL_MS)

    return () => {
      window.clearTimeout(initialLoadId)
      window.clearInterval(intervalId)
    }
  }, [loadStreamers])

  const search = useCallback((term: string): boolean => {
    const normalizedTerm = term.trim()
    if (normalizedTerm) {
      setSearchTerm(normalizedTerm)
      return true
    }

    return false
  }, [])

  const visibleStreamers = searchTerm
    ? filterStreamersByUsername(allStreamers, searchTerm)
    : getInitialLiveStreamers(allStreamers)

  return {
    streamers: sortStreamersByUsername(visibleStreamers),
    searchTerm,
    isLoading,
    error,
    search,
    reload: () => loadStreamers(true),
  }
}
