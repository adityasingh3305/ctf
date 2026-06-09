import { useEffect, useState } from 'react'
import { adapt, fetchJSON, hasKey, isAnime, tmdbURL } from '../lib/tmdb'
import type { Anime, TmdbTv } from '../lib/types'
import { useApp, type WatchlistEntry } from '../store/AppContext'
import { Card } from './Card'

type GridState =
  | { status: 'loading' }
  | { status: 'ready'; items: Anime[] }
  | { status: 'empty'; empty: string }

function entryToAnime(e: WatchlistEntry): Anime {
  return { ...e, members: 0, popularity: 0, title_english: '', title_japanese: '', _full: false }
}

export function GridView() {
  const { view, searchQuery, watchlist, goHome, genreMap, setLoading } = useApp()
  const [state, setState] = useState<GridState>({ status: 'loading' })

  const isList = view === 'list'
  const title = isList ? 'My List' : 'Search: ' + searchQuery

  // watchlist view — derived from local state, no fetch
  useEffect(() => {
    if (!isList) return
    const items = watchlist.slice().reverse().map(entryToAnime)
    setState(
      items.length
        ? { status: 'ready', items }
        : {
            status: 'empty',
            empty: 'Your list is empty — tap the heart on any title to save it.',
          },
    )
  }, [isList, watchlist])

  // search view — debounced query already lives in searchQuery
  useEffect(() => {
    if (isList) return
    const q = searchQuery
    if (!q.trim()) return
    if (!hasKey()) {
      setState({ status: 'empty', empty: 'TMDB key required to search.' })
      return
    }
    let alive = true
    setState({ status: 'loading' })
    setLoading(true)
    ;(async () => {
      try {
        const u = (p: number) =>
          tmdbURL('/search/tv', 'include_adult=false&query=' + encodeURIComponent(q) + '&page=' + p)
        const [d1, d2] = await Promise.all([
          fetchJSON<{ results: TmdbTv[] }>(u(1)),
          fetchJSON<{ results: TmdbTv[] }>(u(2)).catch(() => ({ results: [] })),
        ])
        let arr = (d1.results || [])
          .concat(d2.results || [])
          .map((tv) => adapt(tv, genreMap))
          .filter(isAnime)
          .filter((a) => a.backdrop || a.poster)
        const seen = new Set<number>()
        arr = arr.filter((a) => {
          if (seen.has(a.id)) return false
          seen.add(a.id)
          return true
        })
        if (!alive) return
        setState(
          arr.length
            ? { status: 'ready', items: arr }
            : {
                status: 'empty',
                empty: 'No anime found for “' + q + '”. Try another title.',
              },
        )
      } catch {
        if (alive) setState({ status: 'empty', empty: 'Search failed — check your connection.' })
      } finally {
        setLoading(false)
      }
    })()
    return () => {
      alive = false
    }
  }, [isList, searchQuery, genreMap, setLoading])

  return (
    <div id="gridView">
      <div className="gvhead">
        <h2>{title}</h2>
        <button className="obtn" onClick={goHome}>
          ← Back home
        </button>
      </div>
      {!isList && !hasKey() && (
        <div className="grid-tools">
          <div className="api-notice">
            TMDB key missing. Add <code>VITE_TMDB_KEY</code> to your <code>.env</code> file and
            restart the dev server.
          </div>
        </div>
      )}
      <div className="grid">
        {state.status === 'loading' && <div className="rempty">Loading…</div>}
        {state.status === 'empty' && <div className="rempty">{state.empty}</div>}
        {state.status === 'ready' &&
          state.items.map((a) => <Card key={a.id} a={a} layout="land" />)}
      </div>
    </div>
  )
}
