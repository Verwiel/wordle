import { useEffect } from 'react'
import { useAuthCtx } from '../context/AuthProvider'
import { useWordleCtx } from '../context/WordleProvider'
import Board from '../components/game/Board'
import Keyboard from '../components/game/Keyboard'
import GameOverPanel from '../components/game/GameOverPanel'

const Homepage = () => {
  const { username } = useAuthCtx
  const { showingGameOver, fetchRandomWord, getUserStreaks, randomWord, getLocalStats, wordLength } = useWordleCtx()

  useEffect(() => {
    fetchRandomWord()
    // eslint-disable-next-line
  }, [wordLength])
  
  useEffect(() => {
    if(username){
      getUserStreaks()
    } else {
      getLocalStats()
    }
    // eslint-disable-next-line
  }, [randomWord, username])
  
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
