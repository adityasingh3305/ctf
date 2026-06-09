# ANIVERSE

A cinematic anime discovery hub powered by [TMDB](https://www.themoviedb.org), rebuilt with **React + Vite + TypeScript**.

This is a component-based port of the original single-file `index.html` prototype. It keeps the exact same look and behavior — rotating hero, horizontal rows, search, watchlist, full-screen deep-dive, and trailer modal — but split into typed React components with a shared app store.

## Features

- **Hero carousel** — auto-rotating trending anime with Play (trailer) and See More (deep dive).
- **Content rows** — Top 10, Trending, New Releases, Top Rated, and genre rows, each lazy-loaded and horizontally scrollable.
- **Search** — debounced TMDB search, filtered down to anime (animation genre + Japanese origin).
- **Deep dive** — full-screen detail page with cast, recommendations, navigable similar titles, and a back stack.
- **Watchlist** — heart any title; persisted in `localStorage`.
- **Trailer modal** — embeds the best YouTube trailer, with a fallback link.
- Keyboard (`Esc`) and browser-back navigation close the topmost layer.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### TMDB API key

The app reads the key from an environment variable at build time:

```
# .env
VITE_TMDB_KEY=your_tmdb_v3_api_key
```

A working key is already in `.env`. To use your own, copy `.env.example` to `.env` and set `VITE_TMDB_KEY`, then restart the dev server (Vite only reads `.env` on startup).

> Note: because this is a client-only app, the key is included in the built bundle and visible in network requests. For a production deployment, proxy TMDB calls through a small backend so the key stays server-side.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
  lib/
    tmdb.ts       TMDB client: fetch, adapt, isAnime, image/url helpers
    types.ts      Raw TMDB shapes + the normalized `Anime` type
    rows.ts       Home-row definitions (endpoints, layout, limits)
  store/
    AppContext.tsx  Global state: genres, watchlist, navigation, deep dive, modal
  components/
    Header.tsx      Navbar, search, list count
    Hero.tsx        Rotating hero carousel
    Home.tsx        Hero + rows + footer
    Row.tsx         One horizontally-scrolling content row
    Card.tsx        Landscape + rank cards
    GridView.tsx    Search results / watchlist grid
    DeepDive.tsx    Full-screen title detail
    TrailerModal.tsx  YouTube trailer overlay
    Loader.tsx      Startup loader
    Toast.tsx       Transient notifications
  App.tsx           Layout + global key/popstate handling
  main.tsx          Entry point
  styles.css        Ported styles (unchanged design)
```

## Notes

This demo does not host any media — trailers link to YouTube and details link to TMDB. Data and images courtesy of The Movie Database.
