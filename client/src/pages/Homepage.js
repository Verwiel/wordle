import { useEffect } from 'react'
import { useWordleCtx } from '../context/WordleProvider'
import Board from '../components/game/Board'
import Keyboard from '../components/game/Keyboard'
import GameOverPanel from '../components/game/GameOverPanel'

const Homepage = () => {
  const { showingGameOver, fetchRandomWord } = useWordleCtx()

  useEffect(() => {
    fetchRandomWord()
  }, [])
  
  return (
    <main className='homepage'>
      <Board />
      {!showingGameOver ?
        <Keyboard />
        :
        <GameOverPanel />
      }
    </main>
  )
}

export default Homepage
