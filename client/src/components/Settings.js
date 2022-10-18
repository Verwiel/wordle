import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from '../context/UtilityProvider'

const Settings = () => {
  const { toggleModal } = useUtilityCtx()

  return (
    <article>
      <header>
        <h2>Settings</h2>
      </header>
      
      <section>
        <p>Word Size</p>
        <p>Guesses</p>
        <p>Reset Stats</p>
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

export default Settings
