import ModalLoginLink from './ModalLoginLink'

const Statistics = () => {
  const testData = [
    {
      id: 1,
      outcome: 'win',
      guesses: 5
    },
    {
      id: 2,
      outcome: 'win',
      guesses: 2
    },
    {
      id: 3,
      outcome: 'win',
      guesses: 2
    },
    {
      id: 4,
      outcome: 'loss',
      guesses: null
    },
  ]

  const average = (partial, total) => {
    return Math.round((100 * partial) / total)
  }

  const guessStructure = Array(6).fill('')
  const gamesPlayed = testData.length
  const gamesWon = testData.filter(game => game.outcome === 'win').length
  const winPercent = average(gamesWon, gamesPlayed)
  const guessArray = testData.map(({ guesses }) => guesses).filter(guess => guess !== null)

  const distributionMap = guessStructure.map((position, i) => {
    let number = i + 1
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
          <b>{winPercent}</b>
          <p>Win %</p>
        </span>
        <span>
          <b>0</b>
          <p>Current Streak</p>
        </span>
        <span>
          <b>0</b>
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
