import { Link } from 'react-router-dom'
import { useUtilityCtx } from '../context/UtilityProvider'

const HowToPlay = () => {
  const { toggleModal } = useUtilityCtx()

  return (
    <article>
      <header>
        <h2>HOW TO PLAY</h2>
        <h3>Guess the Wordle in 6 tries.</h3>
      </header>

      <ul>
        <li>Each guess must be a valid 5-letter word.</li>
        <li>The color of the tiles will change to show how close your guess was to the word.</li>
      </ul>

      <section>
        <b>Examples</b>
        {/* Image */}
        <p><b>W</b> is in the word and in the correct spot.</p>
        {/* Image */}
        <p><b>I</b> is in the word but in the wrong spot.</p>
        {/* Image */}
        <p><b>U</b> is not in the word in any spot.</p>
      </section>

      <aside>
        <span>
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>
          {' '}to link your stats
        </span>
      </aside>
    </article>
  )
}

export default HowToPlay
