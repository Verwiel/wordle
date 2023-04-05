
import { useAuthCtx } from '../context/AuthProvider'
import { useUtilityCtx } from '../context/UtilityProvider'
import { Link } from 'react-router-dom'

const Settings = () => {
  const { username, logout } = useAuthCtx()
  const { toggleModal } = useUtilityCtx()

  return (
    <article>
      <header>
        <h2>Settings</h2>
      </header>
      
      <section>
        {username ?
          <p onClick={logout}>logout</p>
          :
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>  
        }
        <p>Word Size</p>
        <p>Guesses</p>
        <p>Reset Stats</p>
      </section>
    </article>
  )
}

export default Settings
