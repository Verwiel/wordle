import { useEffect } from 'react'
import { useAuthCtx } from '../context/AuthProvider'
import { useWordleCtx } from '../context/WordleProvider'
import ModalLoginLink from './ModalLoginLink'

const Statistics = () => {
  const { username } = useAuthCtx()
  const { getUsersGames, usersGames, currentStreak, maxStreak, getLocalStats } = useWordleCtx()

  useEffect(() => {
    if(username){
      getUsersGames()
    } else {
      getLocalStats()
    }

    // eslint-disable-next-line
  }, [username])

  const average = (partial, total) => {
    return Math.round((100 * partial) / total)
  }

  const guessStructure = [1, 2, 3, 4, 5, 6]
  const gamesPlayed = usersGames.length
  const gamesWon = usersGames.filter(game => game.outcome === 'win').length
  const guessArray = usersGames.map(({ guesses }) => guesses).filter(guess => guess !== null)
  const winPercent = average(gamesWon, gamesPlayed)

  const distributionMap = guessStructure.map((number, i) => {
    let count = guessArray.filter(guess => guess === number).length
    let width = count > 0 ? `${average(count, guessArray.length)}%` : 'auto'
    return (
      <li key={number}>
        <p>{number}</p>
        <div style={{width: width}}><p>{count}</p></div>
      </li>
    )
  })


  return (
    <article className='modal-body-stats'>
      <strong>STATISTICS</strong>

      <section className='modal-body-stats-overall'>
        <span>
          <b>{gamesPlayed}</b>
          <p>Played</p>
        </span>
        <span>
          <b>{winPercent > 0 ? winPercent : 0}</b>
          <p>Win %</p>
        </span>
        <span>
          <b>{currentStreak}</b>
          <p>Current Streak</p>
        </span>
        <span>
          <b>{maxStreak}</b>
          <p>Max Streak</p>
        </span>
      </section>

      <strong>GUESS DISTRIBUTION</strong>
      <section className='modal-body-stats-distribution'>
        <ul className='modal-body-stats-distribution-chart'>
          {distributionMap}
        </ul>
      </section>

      <ModalLoginLink />
    </article>
  )
}

export default Statistics
