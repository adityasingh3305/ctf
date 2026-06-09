import { useApp } from '../store/AppContext'

export function Toast() {
  const { toastMsg } = useApp()
  return (
    <div id="toast" className={toastMsg ? 'show' : ''}>
      {toastMsg}
    </div>
  )
}
