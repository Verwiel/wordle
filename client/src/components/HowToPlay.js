import ModalLoginLink from './ModalLoginLink'

const HowToPlay = () => {
  return (
    <article className='modal-body-help'>
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

      <ModalLoginLink />
    </article>
  )
}

export default HowToPlay
