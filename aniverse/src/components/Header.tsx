import { useEffect, useRef, useState } from 'react'
import { useApp } from '../store/AppContext'

export function Header() {
  const { view, watchlist, goHome, doSearch, openList, setView } = useApp()
  const [solid, setSolid] = useState(false)
  const [text, setText] = useState('')
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // navbar turns solid when scrolled, or always solid in grid views
  useEffect(() => {
    const onScroll = () => {
      if (view !== 'home') return
      setSolid(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [view])

  const forceSolid = solid || view !== 'home'

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      doSearch(text)
      inputRef.current?.blur()
    }
  }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setText(v)
    if (searchTimer.current) clearTimeout(searchTimer.current)
    const q = v.trim()
    if (!q) {
      if (view === 'search') goHome()
      return
    }
    searchTimer.current = setTimeout(() => doSearch(q), 350)
  }

  const navClass = (target: string) => (view === target ? 'on' : '')

  return (
    <header className={forceSolid ? 'solid' : ''}>
      <div
        className="brand"
        onClick={() => {
          goHome()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <span className="pi">▶</span>ANI<span style={{ color: 'var(--accent2)' }}>VERSE</span>
      </div>
      <nav>
        <button
          className={navClass('home')}
          onClick={() => {
            goHome()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setView('home')
            const r = document.querySelector('.row')
            if (r) r.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Browse
        </button>
        <button className={navClass('list')} onClick={openList}>
          My List
        </button>
      </nav>
      <div className="tools">
        <form className="search" onSubmit={onSubmit}>
          <svg viewBox="0 0 24 24">
            <path
              d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              fill="none"
              stroke="#8a8f98"
              strokeWidth="2"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search anime…"
            autoComplete="off"
            value={text}
            onChange={onInput}
          />
        </form>
        <button className="navbtn" onClick={openList}>
          ♥ List <span className="ct">{watchlist.length}</span>
        </button>
      </div>
    </header>
  )
}
