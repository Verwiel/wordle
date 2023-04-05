
import { useAuthCtx } from '../context/AuthProvider'
import { useUtilityCtx } from '../context/UtilityProvider'
import { Link } from 'react-router-dom'
import { useWordleCtx } from '../context/WordleProvider'

const Settings = () => {
  const { username, logout } = useAuthCtx()
  const { toggleModal } = useUtilityCtx()
  const { toggleWordLength, wordLength } = useWordleCtx()

  return (
    <article>
      <header>
        <h2>Settings</h2>
      </header>
      
      <section>
        {username ?
          <button onClick={logout}>Log out</button>
          :
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>  
        }
        <div>
          Current word length is {wordLength}
          <button onClick={toggleWordLength}>Set to {wordLength === 5 ? 6 : 5}</button>
        </div>
        {/* <p>Reset Stats</p> */}
      </section>
    </article>
  )
}

export default Settings
