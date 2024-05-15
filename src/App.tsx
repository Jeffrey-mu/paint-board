import Board from '@/pages/board'
import useBoardStore from '@/store/board'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()
  const { updateLanguage } = useBoardStore()
  useEffect(() => {
    const lang = window.location.search.slice(1)
    i18n.changeLanguage(lang)
    updateLanguage(lang)
  }, [])
  return (
    <div>
      <Board />
    </div>
  )
}

export default App
