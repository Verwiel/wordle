import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from '../context/UtilityProvider'

const Statistics = () => {
  const { toggleModal } = useUtilityCtx()

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

export default Statistics
