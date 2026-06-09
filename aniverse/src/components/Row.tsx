import { useEffect, useRef, useState } from 'react'
import { adapt, fetchJSON, isAnime } from '../lib/tmdb'
import type { RowConfig } from '../lib/rows'
import type { Anime, TmdbTv } from '../lib/types'
import { useApp } from '../store/AppContext'
import { Card } from './Card'

type RowState = { status: 'loading' | 'ready' | 'empty' | 'error'; items: Anime[] }

export function Row({ cfg }: { cfg: RowConfig }) {
  const { genreMap, genreReady } = useApp()
  const [state, setState] = useState<RowState>({ status: 'loading', items: [] })
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!genreReady) return
    let alive = true
    setState({ status: 'loading', items: [] })
    ;(async () => {
      try {
        const [d1, d2] = await Promise.all([
          fetchJSON<{ results: TmdbTv[] }>(cfg.make(1)),
          fetchJSON<{ results: TmdbTv[] }>(cfg.make(2)).catch(() => ({ results: [] })),
        ])
        let arr = (d1.results || [])
          .concat(d2.results || [])
          .map((tv) => adapt(tv, genreMap))
          .filter(isAnime)
          .filter((a) => a.backdrop || a.poster)
        const seen = new Set<number>()
        arr = arr
          .filter((a) => {
            if (seen.has(a.id)) return false
            seen.add(a.id)
            return true
          })
          .slice(0, cfg.limit || 18)
        if (!alive) return
        setState(arr.length ? { status: 'ready', items: arr } : { status: 'empty', items: [] })
      } catch {
        if (alive) setState({ status: 'error', items: [] })
      }
    })()
    return () => {
      alive = false
    }
  }, [cfg, genreMap, genreReady])

  const scroll = (dir: number) => {
    const t = trackRef.current
    if (t) t.scrollBy({ left: dir * t.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="row">
      <div className="rowhead">
        <h2>
          <i />
          {cfg.title}
        </h2>
      </div>
      <div className="track-wrap">
        <button className="rnav l" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="track" ref={trackRef}>
          {state.status === 'loading' && <div className="rempty">Loading…</div>}
          {state.status === 'empty' && (
            <div className="rempty">Nothing to show here right now.</div>
          )}
          {state.status === 'error' && <div className="rempty">Couldn’t load this row.</div>}
          {state.status === 'ready' &&
            state.items.map((a, i) => (
              <Card key={a.id} a={a} layout={cfg.layout} rank={i + 1} />
            ))}
        </div>
        <button className="rnav r" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </section>
  )
}
