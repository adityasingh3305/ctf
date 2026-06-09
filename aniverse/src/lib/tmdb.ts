import type {
  Anime,
  GenreMap,
  Person,
  TmdbTv,
  TmdbTvDetail,
  TmdbVideo,
} from './types'

export const TMDB = 'https://api.themoviedb.org/3'
export const IMG = 'https://image.tmdb.org/t/p/'
const APPEND = 'videos,credits,recommendations,similar,external_ids,watch/providers,aggregate_credits'

export const KEY = (import.meta.env.VITE_TMDB_KEY || '').trim()
export const TODAY = new Date().toISOString().slice(0, 10)

export function hasKey(): boolean {
  return !!KEY
}

export function tmdbURL(path: string, query = ''): string {
  return TMDB + path + '?api_key=' + encodeURIComponent(KEY) + (query ? '&' + query : '')
}

export function imgURL(size: string, path?: string | null): string {
  return path ? IMG + size + path : ''
}

export function esc(s?: string): string {
  return (s || '').replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string),
  )
}

export function fallbackSVG(label?: string, kind?: string): string {
  const bg = kind === 'poster' ? '16161d' : '101014'
  return (
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="100%" height="100%" fill="#' +
        bg +
        '"/><text x="50%" y="50%" fill="#8a8f98" font-family="Arial,sans-serif" font-size="34" text-anchor="middle">' +
        esc(label || 'ANIVERSE') +
        '</text></svg>',
    )
  )
}

export function titleImage(a: Anime, kind: 'poster' | 'backdrop'): string {
  const preferred = kind === 'poster' ? a.poster : a.backdrop
  const alternate = kind === 'poster' ? a.backdrop : a.poster
  return preferred || alternate || fallbackSVG(a.title, kind)
}

export async function fetchJSON<T = any>(url: string, tries = 4): Promise<T> {
  let lastErr: unknown
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url)
      if (r.status === 429) {
        await new Promise((s) => setTimeout(s, 1200))
        continue
      }
      if (!r.ok) throw new Error(String(r.status))
      return (await r.json()) as T
    } catch (e) {
      lastErr = e
      if (i === tries - 1) throw e
      await new Promise((s) => setTimeout(s, 600))
    }
  }
  throw lastErr ?? new Error('fetchJSON: exhausted retries')
}

function gnames(ids: number[] | undefined, genreMap: GenreMap) {
  return (ids || [])
    .map((id) => ({ mal_id: id, name: genreMap[id] || '' }))
    .filter((x) => x.name)
}

export function adapt(tv: TmdbTv | null | undefined, genreMap: GenreMap): Anime | null {
  if (!tv) return null
  const pp = tv.poster_path || tv.backdrop_path
  const yr = (tv.first_air_date || '').slice(0, 4)
  const gids = tv.genre_ids || (tv.genres ? tv.genres.map((g) => g.id) : [])
  return {
    id: tv.id,
    mal_id: tv.id,
    title: tv.name || tv.original_name || 'Untitled',
    title_english: tv.name || '',
    title_japanese: tv.original_name || '',
    synopsis: tv.overview || '',
    score: tv.vote_average != null && (tv.vote_count || 0) > 0 ? tv.vote_average : null,
    members: tv.vote_count || 0,
    popularity: tv.popularity || 0,
    year: yr ? parseInt(yr) : '',
    type: 'TV',
    poster: imgURL('w500', pp),
    backdrop: tv.backdrop_path ? imgURL('w780', tv.backdrop_path) : imgURL('w780', pp),
    genres: gnames(gids, genreMap),
    genre_ids: gids,
    orig_lang: tv.original_language || '',
    url: 'https://www.themoviedb.org/tv/' + tv.id,
    _full: false,
  }
}

export function isAnime(a: Anime | null): a is Anime {
  return !!a && (a.genre_ids || []).indexOf(16) >= 0 && a.orig_lang === 'ja'
}

export function pickVideo(list: TmdbVideo[] | undefined): TmdbVideo | null {
  const yt = (list || []).filter((v) => v.site === 'YouTube')
  return (
    yt.find((v) => v.type === 'Trailer') ||
    yt.find((v) => v.type === 'Teaser') ||
    yt.find((v) => v.type === 'Clip') ||
    yt.find((v) => v.type === 'Opening Credits') ||
    yt[0] ||
    null
  )
}

export function adaptDetail(d: TmdbTvDetail, genreMap: GenreMap): Anime {
  const base = adapt(d, genreMap) as Anime
  if (d.backdrop_path) base.backdrop = imgURL('original', d.backdrop_path)
  base.episodes = d.number_of_episodes
  base.seasons = d.number_of_seasons
  base.status = d.status
  base.runtime = (d.episode_run_time && d.episode_run_time[0]) || null
  base.first_air = d.first_air_date
  base.last_air = d.last_air_date
  base.in_production = d.in_production
  base.origin = (d.origin_country || []).join(', ')
  base.studios = d.production_companies || []
  base.networks = d.networks || []
  const tr = pickVideo((d.videos && d.videos.results) || [])
  if (tr) base.trailer = { youtube_id: tr.key }
  let cast: Person[] = (d.credits && d.credits.cast) || []
  if ((!cast || !cast.length) && d.aggregate_credits) {
    cast = (d.aggregate_credits.cast || []).map((c) => ({
      name: c.name,
      profile_path: c.profile_path,
      character: (c.roles && c.roles[0] && c.roles[0].character) || '',
    }))
  }
  base.credits = cast
  base.recs = (d.recommendations && d.recommendations.results) || []
  base.similar = (d.similar && d.similar.results) || []
  base._full = true
  return base
}

export function detailUrl(id: number): string {
  return tmdbURL('/tv/' + id, 'append_to_response=' + encodeURIComponent(APPEND))
}

export function discQS(extra: string): string {
  return 'with_original_language=ja&include_adult=false&' + extra
}

export async function ensureTrailer(a: Anime): Promise<{ youtube_id: string } | null> {
  if (a.trailer && a.trailer.youtube_id) return a.trailer
  const langs = ['', '&language=ja', '&language=en-US']
  for (let i = 0; i < langs.length; i++) {
    try {
      const v = await fetchJSON<{ results: TmdbVideo[] }>(
        tmdbURL('/tv/' + a.mal_id + '/videos', langs[i].replace(/^&/, '')),
        2,
      )
      const tr = pickVideo((v && v.results) || [])
      if (tr) {
        a.trailer = { youtube_id: tr.key }
        return a.trailer
      }
    } catch {
      /* try next language */
    }
  }
  return null
}

export async function loadGenreMap(): Promise<GenreMap> {
  const map: GenreMap = {}
  try {
    const d = await fetchJSON<{ genres: { id: number; name: string }[] }>(
      TMDB + '/genre/tv/list?api_key=' + KEY,
    )
    ;(d.genres || []).forEach((g) => (map[g.id] = g.name))
  } catch {
    /* ignore — rows still render, genre tags just omitted */
  }
  return map
}
