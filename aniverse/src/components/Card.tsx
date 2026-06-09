import { Fragment } from 'react'
import { titleImage } from '../lib/tmdb'
import type { Anime } from '../lib/types'
import { useApp } from '../store/AppContext'

/** Renders score · year · type, separated by dots. */
export function joinDots(parts: JSX.Element[]) {
  return parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="dot" />}
      {p}
    </Fragment>
  ))
}

export function Meta({ a }: { a: Pick<Anime, 'score' | 'year' | 'type'> }) {
  const parts: JSX.Element[] = []
  if (a.score) parts.push(<span key="s" className="star">★ {(+a.score).toFixed(1)}</span>)
  if (a.year) parts.push(<span key="y">{a.year}</span>)
  parts.push(<span key="t">{a.type || 'TV'}</span>)
  return <>{joinDots(parts)}</>
}

interface CardProps {
  a: Anime
  layout: 'rank' | 'land'
  rank?: number
}

export function Card({ a, layout, rank }: CardProps) {
  const { inWL, openTitle } = useApp()
  const fav = inWL(a)

  if (layout === 'rank') {
    const label = rank != null && rank < 10 ? '0' + rank : String(rank)
    return (
      <div
        className={'rcard rank' + (fav ? ' inwl' : '')}
        data-id={a.id}
        onClick={() => openTitle(a.id)}
      >
        <div className="poster">
          <span className="rib">TOP {label}</span>
          <span className="wl">♥</span>
          <img src={titleImage(a, 'poster')} loading="lazy" alt={a.title + ' poster'} />
        </div>
        <div className="rt">{a.title}</div>
        <div className="rm">
          <Meta a={a} />
        </div>
      </div>
    )
  }

  return (
    <div
      className={'rcard' + (fav ? ' inwl' : '')}
      data-id={a.id}
      onClick={() => openTitle(a.id)}
    >
      <div className="thumb">
        <span className="wl">♥</span>
        <img src={titleImage(a, 'backdrop')} loading="lazy" alt={a.title + ' artwork'} />
      </div>
      <div className="rt">{a.title}</div>
      <div className="rm">
        <Meta a={a} />
      </div>
    </div>
  )
}
