import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from '../context/UtilityProvider'
import { useAuthCtx } from '../context/AuthProvider'

const ModalLoginLink = () => {
  const { username, logout } = useAuthCtx()
  const { toggleModal } = useUtilityCtx()

  const changeAccount = () => {
    logout()
    toggleModal('close', '')
  }
  
  return (
    <aside className='modal-body-login'>
      <p><FontAwesomeIcon icon={faChartSimple} /></p>
      {!username ?
        <span>
          <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>
          {' '}to link your stats
        </span>
      :
      <span>
        Currently logged in as {username}.{' '}
        <Link to='/portal' onClick={changeAccount}>Want to change accounts?</Link>
      </span>
      }
    </aside>
  )
}

export default ModalLoginLink
