import { useWordleCtx } from '../../context/WordleProvider'


const GameOverPanel = () => {
  const { randomWord, gameStatus, resetBoard } = useWordleCtx()
  return (
    <article className='gameover-panel'>
      <header>
        <h2>{gameStatus === 'COMPLETE' ? "Congratulations!" : "Better luck next time"}</h2>
      </header>

      <section>
        <p><b>Word:</b> {randomWord}</p>
        <p>View the definition on <a href={`https://www.dictionary.com/browse/${randomWord}`} target="_blank" rel="noopener noreferrer">Dictionary.com</a></p>
        
      </section>

      <section>
        <button className='rounded-button' onClick={resetBoard}>Try a new word?</button>
      </section>
    </article>
  )
}

export default GameOverPanel