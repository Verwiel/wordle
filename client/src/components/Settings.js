import { Link } from 'react-router-dom'
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
        <span>
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>
          {' '}to link your stats
        </span>
      </aside>
    </article>
  )
}

export default Settings
