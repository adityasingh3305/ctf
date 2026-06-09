import { discQS, TODAY, tmdbURL } from './tmdb'

export interface RowConfig {
  key: string
  title: string
  layout: 'rank' | 'land'
  limit: number
  make: (p: number) => string
}

export const ROWS: RowConfig[] = [
  { key: 'top10', title: 'TOP 10 Today', layout: 'rank', limit: 10, make: (p) => tmdbURL('/trending/tv/week', 'page=' + p) },
  { key: 'trend', title: 'Trending Now', layout: 'land', limit: 18, make: (p) => tmdbURL('/trending/tv/day', 'page=' + p) },
  { key: 'new', title: 'New Releases', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16&sort_by=first_air_date.desc&vote_count.gte=8&first_air_date.lte=' + TODAY) + '&page=' + p) },
  { key: 'toprated', title: 'Top Rated', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16&sort_by=vote_average.desc&vote_count.gte=300') + '&page=' + p) },
  { key: 'action', title: 'Action & Adventure', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16,10759&sort_by=popularity.desc&vote_count.gte=12') + '&page=' + p) },
  { key: 'comedy', title: 'Comedy', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16,35&sort_by=popularity.desc&vote_count.gte=12') + '&page=' + p) },
  { key: 'fantasy', title: 'Sci-Fi & Fantasy', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16,10765&sort_by=popularity.desc&vote_count.gte=12') + '&page=' + p) },
  { key: 'drama', title: 'Drama', layout: 'land', limit: 18, make: (p) => tmdbURL('/discover/tv', discQS('with_genres=16,18&sort_by=popularity.desc&vote_count.gte=12') + '&page=' + p) },
]
