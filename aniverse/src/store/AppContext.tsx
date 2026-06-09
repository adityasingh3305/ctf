import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { Anime, GenreMap } from '../lib/types'
import { adaptDetail, detailUrl, fetchJSON, loadGenreMap } from '../lib/tmdb'
import type { TmdbTvDetail } from '../lib/types'

const WL_STORE = 'aniverse_tmdb_wl'

export interface WatchlistEntry {
  id: number
  mal_id: number
  title: string
  poster: string
  backdrop: string
  score: number | null
  year: number | ''
  type: string
  genres: Anime['genres']
  genre_ids: number[]
  orig_lang: string
  synopsis: string
  url: string
}

export type View = 'home' | 'search' | 'list'

interface AppState {
  genreMap: GenreMap
  genreReady: boolean
  loading: boolean
  setLoading: (on: boolean) => void
  toastMsg: string | null
  toast: (m: string) => void
  // watchlist
  watchlist: WatchlistEntry[]
  inWL: (a: { id: number; mal_id?: number } | null | undefined) => boolean
  toggleWL: (a: Anime | WatchlistEntry) => void
  // navigation
  view: View
  searchQuery: string
  setView: (v: View) => void
  goHome: () => void
  doSearch: (q: string) => void
  openList: () => void
  // deep dive
  deepItem: Anime | null
  openTitle: (id: number) => Promise<void>
  jumpTo: (id: number) => Promise<void>
  deepBack: () => void
  closeDeep: () => void
  // trailer modal
  trailerItem: Anime | null
  openTrailer: (a: Anime) => void
  closeTrailer: () => void
}

const Ctx = createContext<AppState | null>(null)

export function useApp(): AppState {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used within <AppProvider>')
  return ctx
}

function loadWL(): WatchlistEntry[] {
  try {
    return JSON.parse(localStorage.getItem(WL_STORE) || '[]')
  } catch {
    return []
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [genreMap, setGenreMap] = useState<GenreMap>({})
  const [genreReady, setGenreReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [toastMsg, setToastMsg] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [watchlist, setWatchlist] = useState<WatchlistEntry[]>(loadWL)
  const [view, setView] = useState<View>('home')
  const [searchQuery, setSearchQuery] = useState('')

  const [deepStack, setDeepStack] = useState<Anime[]>([])
  const [deepItem, setDeepItem] = useState<Anime | null>(null)
  const [trailerItem, setTrailerItem] = useState<Anime | null>(null)

  // load genre map once
  useEffect(() => {
    let alive = true
    loadGenreMap().then((m) => {
      if (alive) {
        setGenreMap(m)
        setGenreReady(true)
      }
    })
    return () => {
      alive = false
    }
  }, [])

  const toast = useCallback((m: string) => {
    setToastMsg(m)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(null), 2600)
  }, [])

  // ===== watchlist =====
  const inWL = useCallback(
    (a: { id: number; mal_id?: number } | null | undefined) =>
      !!a && watchlist.some((x) => x.id === a.id || x.mal_id === (a.mal_id ?? a.id)),
    [watchlist],
  )

  const toggleWL = useCallback((a: Anime | WatchlistEntry) => {
    if (!a) return
    setWatchlist((prev) => {
      const exists = prev.some((x) => x.id === a.id || x.mal_id === a.mal_id)
      const next = exists
        ? prev.filter((x) => x.id !== a.id && x.mal_id !== a.mal_id)
        : [
            ...prev,
            {
              id: a.id,
              mal_id: a.mal_id,
              title: a.title,
              poster: a.poster,
              backdrop: a.backdrop,
              score: a.score,
              year: a.year,
              type: a.type || 'TV',
              genres: a.genres,
              genre_ids: a.genre_ids,
              orig_lang: a.orig_lang,
              synopsis: a.synopsis,
              url: a.url,
            },
          ]
      localStorage.setItem(WL_STORE, JSON.stringify(next))
      return next
    })
  }, [])

  // ===== navigation =====
  const goHome = useCallback(() => {
    setView('home')
    setSearchQuery('')
  }, [])

  const doSearch = useCallback((q: string) => {
    if (!q.trim()) return
    setSearchQuery(q)
    setView('search')
  }, [])

  const openList = useCallback(() => setView('list'), [])

  // ===== deep dive =====
  const openTitle = useCallback(
    async (id: number) => {
      if (!id) return
      setDeepStack([])
      setLoading(true)
      try {
        const full = adaptDetail(await fetchJSON<TmdbTvDetail>(detailUrl(id)), genreMap)
        setDeepItem(full)
        try {
          window.history.pushState({ deep: 1 }, '')
        } catch {
          /* ignore */
        }
      } catch {
        toast('Could not open this title.')
      }
      setLoading(false)
    },
    [genreMap, toast],
  )

  const jumpTo = useCallback(
    async (id: number) => {
      setLoading(true)
      try {
        const full = adaptDetail(await fetchJSON<TmdbTvDetail>(detailUrl(id)), genreMap)
        setDeepStack((prev) => (deepItem ? [...prev, deepItem] : prev))
        setDeepItem(full)
      } catch {
        toast('Could not load that title.')
      }
      setLoading(false)
    },
    [genreMap, deepItem, toast],
  )

  const closeDeep = useCallback(() => {
    setDeepItem(null)
    setDeepStack([])
  }, [])

  const deepBack = useCallback(() => {
    if (deepStack.length) {
      const copy = deepStack.slice()
      const last = copy.pop() as Anime
      setDeepItem(last)
      setDeepStack(copy)
    } else {
      closeDeep()
    }
  }, [deepStack, closeDeep])

  // ===== trailer modal =====
  const openTrailer = useCallback((a: Anime) => setTrailerItem(a), [])
  const closeTrailer = useCallback(() => setTrailerItem(null), [])

  // scroll to top when deep dive item changes
  useEffect(() => {
    if (deepItem) {
      const el = document.getElementById('deep')
      if (el) el.scrollTop = 0
    }
  }, [deepItem])

  const value = useMemo<AppState>(
    () => ({
      genreMap,
      genreReady,
      loading,
      setLoading,
      toastMsg,
      toast,
      watchlist,
      inWL,
      toggleWL,
      view,
      searchQuery,
      setView,
      goHome,
      doSearch,
      openList,
      deepItem,
      openTitle,
      jumpTo,
      deepBack,
      closeDeep,
      trailerItem,
      openTrailer,
      closeTrailer,
    }),
    [
      genreMap,
      genreReady,
      loading,
      toastMsg,
      toast,
      watchlist,
      inWL,
      toggleWL,
      view,
      searchQuery,
      goHome,
      doSearch,
      openList,
      deepItem,
      openTitle,
      jumpTo,
      deepBack,
      closeDeep,
      trailerItem,
      openTrailer,
      closeTrailer,
    ],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
