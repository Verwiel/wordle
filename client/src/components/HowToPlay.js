import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
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
        <div className='modal-body-help-word'>
          <div className='modal-body-help-word-tile correct'>
            <div className='modal-body-help-word-tile-letter'>w</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>e</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>a</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>r</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>y</div>
          </div>
        </div>
        <p><b>W</b> is in the word and in the correct spot.</p>
        <div className='modal-body-help-word'>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>p</div>
          </div>
          <div className='modal-body-help-word-tile present'>
            <div className='modal-body-help-word-tile-letter'>i</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>l</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>l</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>s</div>
          </div>
        </div>
        <p><b>I</b> is in the word but in the wrong spot.</p>
        <div className='modal-body-help-word'>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>v</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>a</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>g</div>
          </div>
          <div className='modal-body-help-word-tile absent'>
            <div className='modal-body-help-word-tile-letter'>u</div>
          </div>
          <div className='modal-body-help-word-tile blank'>
            <div className='modal-body-help-word-tile-letter'>e</div>
          </div>
        </div>
        <p><b>U</b> is not in the word in any spot.</p>
      </section>

      <aside>
        <p><FontAwesomeIcon icon={faChartSimple} /></p>
        <span>
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>
          {' '}to link your stats
        </span>
      </aside>
    </article>
  )
}

export default HowToPlay
