import { useApp } from '../store/AppContext'

export function Loader() {
  const { loading } = useApp()
  return (
    <div id="loader" className={loading ? '' : 'hide'}>
      <div className="lg">ANIVERSE</div>
      <div className="spin" />
      <p>LOADING THE ANIME UNIVERSE…</p>
    </div>
  )
}
