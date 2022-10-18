import ModalLoginLink from './ModalLoginLink'

const Statistics = () => {
  return (
    <article>
      <p><b>STATISTICS</b></p>

      <section>
        <span>
          <strong>0</strong>
          <p>Played</p>
        </span>
        <span>
          <strong>0</strong>
          <p>Win %</p>
        </span>
        <span>
          <strong>0</strong>
          <p>Current Streak</p>
        </span>
        <span>
          <strong>0</strong>
          <p>Max Streak</p>
        </span>
      </section>

      <section>
        <p><b>GUESS DISTRIBUTION</b></p>
        {/* Number */}
        {/* Progressbar with amount of times acheived within */}
      </section>

      <ModalLoginLink />
    </article>
  )
}

export default Statistics
