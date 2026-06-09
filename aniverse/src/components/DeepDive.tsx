import { useMemo } from 'react'
import { adapt, imgURL, titleImage } from '../lib/tmdb'
import type { Anime } from '../lib/types'
import { useApp } from '../store/AppContext'
import { joinDots } from './Card'

function initials(n?: string) {
  return (n || '?')
    .split(/\s+/)
    .map((w) => w[0] || '')
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function runtimeText(a: Anime) {
  if (a.runtime) {
    return a.runtime >= 60
      ? Math.floor(a.runtime / 60) + 'h ' + (a.runtime % 60) + 'm'
      : a.runtime + 'm'
  }
  return a.episodes ? a.episodes + ' eps' : ''
}

export function DeepDive() {
  const { deepItem: a, genreMap, inWL, toggleWL, openTrailer, jumpTo, deepBack, closeDeep } =
    useApp()

  const pool = useMemo<Anime[]>(() => {
    if (!a) return []
    const seen = new Set<number>([a.id])
    const out: Anime[] = []
    ;(a.recs || [])
      .concat(a.similar || [])
      .map((tv) => adapt(tv, genreMap))
      .forEach((r) => {
        if (r && !seen.has(r.id)) {
          seen.add(r.id)
          out.push(r)
        }
      })
    return out.slice(0, 16)
  }, [a, genreMap])

  if (!a) return null

  const sub = a.title_japanese && a.title_japanese !== a.title ? a.title_japanese : ''
  const rt = runtimeText(a)
  const gtxt = (a.genres || [])
    .slice(0, 3)
    .map((g) => g.name)
    .join(', ')
  const fav = inWL(a)

  const meta: JSX.Element[] = []
  if (a.score) meta.push(<span key="s" className="star">★ {(+a.score).toFixed(1)}</span>)
  if (a.year) meta.push(<span key="y">{a.year}</span>)
  if (rt) meta.push(<span key="r">{rt}</span>)
  if (a.status) meta.push(<span key="st">{a.status}</span>)
  if (gtxt) meta.push(<span key="g" className="gtag">{gtxt}</span>)

  const cast = (a.credits || []).filter((c) => c.name).slice(0, 12)

  const scrollToSimilar = () => {
    const el = document.querySelector('#deepBody .pgrid')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div id="deep" className="show">
      <div
        id="deepBanner"
        style={{ backgroundImage: `url("${titleImage(a, 'backdrop')}")` }}
      >
        <button className="dtopbtn" id="deepBackBtn" onClick={deepBack}>
          ‹
        </button>
        <button className="dtopbtn" id="deepClose" onClick={closeDeep}>
          ×
        </button>
        <div id="deepHero">
          <h1>{a.title || ''}</h1>
          {sub && <div className="jp">{sub}</div>}
          <div className="metaline">{joinDots(meta)}</div>
          <p className="syn">{a.synopsis || 'No synopsis available.'}</p>
          <div className="deepactions">
            <button className="pbtn" onClick={() => openTrailer(a)}>
              ▶ Trailer
            </button>
            <button
              className={'obtn icon' + (fav ? ' on' : '')}
              title="Watchlist"
              onClick={() => toggleWL(a)}
            >
              {fav ? '♥' : '+'}
            </button>
            <button className="obtn" onClick={scrollToSimilar}>
              ✦ Similars
            </button>
            <a className="obtn" href={a.url} target="_blank" rel="noopener">
              TMDB ↗
            </a>
          </div>
        </div>
      </div>
      <div id="deepBody">
        {cast.length > 0 && (
          <div className="dsec">
            <h2>Actors</h2>
            <div className="actorgrid">
              {cast.map((c, i) => (
                <div className="actor" key={i}>
                  {c.profile_path ? (
                    <img
                      className="av"
                      src={imgURL('w185', c.profile_path)}
                      loading="lazy"
                      alt={c.name || 'Actor'}
                    />
                  ) : (
                    <div className="ph">{initials(c.name)}</div>
                  )}
                  <div style={{ minWidth: 0 }}>
                    <div className="nm">{c.name || ''}</div>
                    {c.character && <div className="role">{c.character}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {pool.length > 0 && (
          <div className="dsec">
            <h2>You may like</h2>
            <div className="pgrid">
              {pool.map((r) => {
                const m: JSX.Element[] = []
                if (r.score) m.push(<span key="s" className="star">★ {(+r.score).toFixed(1)}</span>)
                if (r.year) m.push(<span key="y">{r.year}</span>)
                m.push(<span key="t">{r.type || 'TV'}</span>)
                return (
                  <div className="pcard" key={r.id} onClick={() => jumpTo(r.id)}>
                    <img
                      className="pimg"
                      src={titleImage(r, 'backdrop')}
                      loading="lazy"
                      alt={(r.title || 'Recommended title') + ' artwork'}
                    />
                    <div className="pt">{r.title || ''}</div>
                    <div className="pm">{joinDots(m)}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
