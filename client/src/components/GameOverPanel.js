import { useWordleCtx } from '../context/WordleProvider'


const GameOverPanel = () => {
  const { randomWord, gameStatus, resetBoard } = useWordleCtx()
  return (
    <article className='gameover-panel'>
      <header>
        <h2>{gameStatus === 'COMPLETE' ? "Congratulations!" : "Better luck next time"}</h2>
      </header>

      <section>
        <p><b>Word:</b> {randomWord}</p>
        <p><b>Definition:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
      </section>

      <section>
        <button className='rounded-button' onClick={resetBoard}>Try a new word?</button>
      </section>
    </article>
  )
}

export default GameOverPanel