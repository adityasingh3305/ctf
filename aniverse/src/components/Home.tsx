import { ROWS } from '../lib/rows'
import { Hero } from './Hero'
import { Row } from './Row'

export function Home({ hidden }: { hidden?: boolean }) {
  return (
    <div id="landing" style={hidden ? { display: 'none' } : undefined}>
      <Hero />
      <div id="home">
        {ROWS.map((c) => (
          <Row key={c.key} cfg={c} />
        ))}
      </div>
      <footer>
        <div className="fb">
          <span
            className="pi"
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: 'var(--accent2)',
              display: 'grid',
              placeItems: 'center',
              fontSize: 11,
            }}
          >
            ▶
          </span>{' '}
          ANIVERSE
        </div>
        <div>
          A cinematic anime discovery hub powered by TMDB. This demo does not host any media —
          trailers link to YouTube and details link to TMDB.
        </div>
        <div style={{ marginTop: 8 }}>
          Built for anime fans · Data &amp; images courtesy of{' '}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener">
            The Movie Database
          </a>
          .
        </div>
      </footer>
    </div>
  )
}
