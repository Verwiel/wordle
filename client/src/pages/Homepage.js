import { useEffect } from 'react'
import { useWordleCtx } from '../context/WordleProvider'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'
import GameOverPanel from '../components/GameOverPanel'


const Homepage = () => {
  const { showingGameOver, fetchRandomWord, randomWord } = useWordleCtx()

  useEffect(() => {
    fetchRandomWord()
  }, [])

  console.log(randomWord)
  
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
