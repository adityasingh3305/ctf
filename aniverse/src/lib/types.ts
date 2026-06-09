export interface Genre {
  mal_id: number
  name: string
}

export interface Person {
  name: string
  profile_path: string | null
  character: string
}

export interface Studio {
  id: number
  name: string
}

/** The normalized shape every component consumes. Mirrors the original `adapt()` output. */
export interface Anime {
  id: number
  mal_id: number
  title: string
  title_english: string
  title_japanese: string
  synopsis: string
  score: number | null
  members: number
  popularity: number
  year: number | ''
  type: string
  poster: string
  backdrop: string
  genres: Genre[]
  genre_ids: number[]
  orig_lang: string
  url: string
  _full: boolean
  // detail-only fields
  episodes?: number | null
  seasons?: number | null
  status?: string
  runtime?: number | null
  first_air?: string
  last_air?: string
  in_production?: boolean
  origin?: string
  studios?: Studio[]
  networks?: Studio[]
  trailer?: { youtube_id: string }
  credits?: Person[]
  recs?: TmdbTv[]
  similar?: TmdbTv[]
}

/** Raw TMDB TV shapes (only the fields we read). */
export interface TmdbTv {
  id: number
  name?: string
  original_name?: string
  overview?: string
  vote_average?: number
  vote_count?: number
  popularity?: number
  first_air_date?: string
  poster_path?: string | null
  backdrop_path?: string | null
  genre_ids?: number[]
  genres?: { id: number; name: string }[]
  original_language?: string
}

export interface TmdbVideo {
  site: string
  type: string
  key: string
}

export interface TmdbTvDetail extends TmdbTv {
  number_of_episodes?: number
  number_of_seasons?: number
  status?: string
  episode_run_time?: number[]
  last_air_date?: string
  in_production?: boolean
  origin_country?: string[]
  production_companies?: Studio[]
  networks?: Studio[]
  videos?: { results: TmdbVideo[] }
  credits?: { cast: Person[] }
  aggregate_credits?: { cast: AggregateCastMember[] }
  recommendations?: { results: TmdbTv[] }
  similar?: { results: TmdbTv[] }
}

export interface AggregateCastMember {
  name: string
  profile_path: string | null
  roles?: { character: string }[]
}

export type GenreMap = Record<number, string>
