import { useEffect } from 'react'
import { DeepDive } from './components/DeepDive'
import { GridView } from './components/GridView'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Loader } from './components/Loader'
import { Toast } from './components/Toast'
import { TrailerModal } from './components/TrailerModal'
import { useApp } from './store/AppContext'

export function App() {
  const {
    view,
    genreReady,
    setLoading,
    deepItem,
    trailerItem,
    closeTrailer,
    deepBack,
    goHome,
  } = useApp()

  // hide the initial loader once the genre map (first network round-trip) resolves
  useEffect(() => {
    if (genreReady) setLoading(false)
  }, [genreReady, setLoading])

  // global Escape + browser-back handling, mirroring the original layered priority
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (trailerItem) return closeTrailer()
      if (deepItem) return deepBack()
      if (view !== 'home') return goHome()
    }
    const onPop = () => {
      if (trailerItem) return closeTrailer()
      if (deepItem) return deepBack()
      if (view !== 'home') return goHome()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('popstate', onPop)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('popstate', onPop)
    }
  }, [view, deepItem, trailerItem, closeTrailer, deepBack, goHome])

  return (
    <>
      <Header />
      <Home hidden={view !== 'home'} />
      {view !== 'home' && <GridView />}
      {deepItem && <DeepDive />}
      {trailerItem && <TrailerModal />}
      <Toast />
      <Loader />
    </>
  )
}
