import { useEffect, useRef, useState } from 'react'
import { adapt, fetchJSON, isAnime, KEY, TMDB, titleImage } from '../lib/tmdb'
import type { Anime, TmdbTv } from '../lib/types'
import { useApp } from '../store/AppContext'
import { joinDots } from './Card'

export function Hero() {
  const { genreMap, genreReady, openTitle, openTrailer } = useApp()
  const [items, setItems] = useState<Anime[]>([])
  const [idx, setIdx] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!genreReady) return
    let alive = true
    ;(async () => {
      try {
        const d = await fetchJSON<{ results: TmdbTv[] }>(
          TMDB + '/trending/tv/week?api_key=' + KEY + '&page=1',
        )
        const list = (d.results || [])
          .map((tv) => adapt(tv, genreMap))
          .filter(isAnime)
          .filter((a) => !!a.backdrop)
          .slice(0, 6)
        if (alive) {
          setItems(list)
          setIdx(0)
        }
      } catch {
        /* hero falls back to placeholder below */
      }
    })()
    return () => {
      alive = false
    }
  }, [genreMap, genreReady])

  // auto-advance every 8s
  useEffect(() => {
    if (!items.length) return
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => setIdx((i) => (i + 1) % items.length), 8000)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [items])

  const restart = () => {
    if (timer.current) clearInterval(timer.current)
    if (items.length) timer.current = setInterval(() => setIdx((i) => (i + 1) % items.length), 8000)
  }

  const a = items[idx]

  if (!a) {
    return (
      <section id="hero">
        <div id="heroBg" />
        <div className="fade" />
        <div id="heroContent">
          <h1>ANIVERSE</h1>
          <p className="hsyn">Discover thousands of anime titles — browse the rows below.</p>
        </div>
        <div id="heroDots" />
      </section>
    )
  }

  const genres = (a.genres || [])
    .slice(0, 3)
    .map((x) => x.name)
    .join(', ')

  const meta: JSX.Element[] = []
  if (a.score) meta.push(<span key="s" className="star">★ {(+a.score).toFixed(1)}</span>)
  if (a.year) meta.push(<span key="y">{a.year}</span>)
  if (genres) meta.push(<span key="g">{genres}</span>)

  return (
    <section id="hero">
      <div id="heroBg" style={{ backgroundImage: `url("${titleImage(a, 'backdrop')}")` }} />
      <div className="fade" />
      <div id="heroContent">
        <h1>{a.title}</h1>
        <div className="hmeta">{joinDots(meta)}</div>
        <p className="hsyn">{a.synopsis || 'No synopsis available.'}</p>
        <div className="hbtns">
          <button className="pbtn" onClick={() => openTrailer(a)}>
            ▶ Play
          </button>
          <button className="obtn" onClick={() => openTitle(a.id)}>
            ⓘ See More
          </button>
        </div>
      </div>
      <div id="heroDots">
        {items.map((_, i) => (
          <span
            key={i}
            className={i === idx ? 'on' : ''}
            onClick={() => {
              setIdx(i)
              restart()
            }}
          />
        ))}
      </div>
    </section>
  )
}
