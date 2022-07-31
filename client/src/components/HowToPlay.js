import React from 'react'

const HowToPlay = () => {
  return (
    <article>
      <header>
        <h2>HOW TO PLAY</h2>
      </header>

      <section>
        <p>Guess the <b>WORDLE</b> in 6 tries.</p>
        <p>Each guess must be a valid 5-letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
      </section>

      <section>
        <p><b>Examples</b></p>
        {/* Image */}
        <p>The letter <b>W</b> is in the word and in the correct spot.</p>
        {/* Image */}
        <p>The letter <b>I</b> is in the word but in the wrong spot.</p>
        {/* Image */}
        <p>The letter <b>U</b> is not in the word in any spot.</p>
      </section>

      <aside>
        <p>Looking to load your saved stats?</p>
        <a href='#'>Log in here</a>
      </aside>
    </article>
  )
}

export default HowToPlay
