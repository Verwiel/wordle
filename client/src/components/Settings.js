
import { useAuthCtx } from '../context/AuthProvider'
import { useUtilityCtx } from '../context/UtilityProvider'
import { Link } from 'react-router-dom'
import { useWordleCtx } from '../context/WordleProvider'

const Settings = () => {
  const { username, logout } = useAuthCtx()
  const { toggleModal } = useUtilityCtx()
  const { toggleWordLength, wordLength } = useWordleCtx()

  return (
    <article className='modal-body-settings'>
      <header>
        <h2>Settings</h2>
      </header>
      
      <section>
        <div>
          Word Length: 
          <select name="wordLengthSelect" defaultValue={wordLength} onChange={(e) => toggleWordLength(e)}>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </div>
        
        {username ?
          <button onClick={logout}>Log out</button>
          :
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>  
        }
      </section>
    </article>
  )
}

export default Settings
