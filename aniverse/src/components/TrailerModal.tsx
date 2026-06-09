import { useEffect, useState } from 'react'
import { ensureTrailer } from '../lib/tmdb'
import { useApp } from '../store/AppContext'

export function TrailerModal() {
  const { trailerItem: a, closeTrailer, toast } = useApp()
  const [youtubeId, setYoutubeId] = useState<string | null>(null)
  const [resolved, setResolved] = useState(false)

  useEffect(() => {
    if (!a) {
      setYoutubeId(null)
      setResolved(false)
      return
    }
    let alive = true
    setResolved(false)
    toast('Loading trailer…')
    ensureTrailer(a).then((t) => {
      if (!alive) return
      setYoutubeId(t && t.youtube_id ? t.youtube_id : null)
      setResolved(true)
    })
    return () => {
      alive = false
    }
  }, [a, toast])

  if (!a) return null

  const watchHref = youtubeId
    ? 'https://www.youtube.com/watch?v=' + youtubeId
    : 'https://www.youtube.com/results?search_query=' +
      encodeURIComponent((a.title || '') + ' anime trailer')

  return (
    <div
      id="modal"
      className="show"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modal') closeTrailer()
      }}
    >
      <div className="wrap">
        <a id="modalWatch" className="obtn" href={watchHref} target="_blank" rel="noopener">
          Watch on YouTube ↗
        </a>
        <button className="close" onClick={closeTrailer}>
          ×
        </button>
        <div id="modalBody">
          {!resolved ? (
            <div className="noembed">Loading trailer…</div>
          ) : youtubeId ? (
            <iframe
              src={
                'https://www.youtube-nocookie.com/embed/' +
                youtubeId +
                '?autoplay=1&rel=0&playsinline=1'
              }
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="noembed">
              No embeddable trailer was found for this title.
              <br />
              Use “Watch on YouTube” above to open it directly.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
