import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { useUtilityCtx } from '../context/UtilityProvider'

const ModalLoginLink = () => {
  const { toggleModal } = useUtilityCtx()
  
  return (
    <aside className='modal-body-login'>
      <p><FontAwesomeIcon icon={faChartSimple} /></p>
      <span>
        <Link to='/portal' onClick={() => toggleModal('close', '')}>Log in or create an account</Link>
        {' '}to link your stats
      </span>
    </aside>
  )
}

export default ModalLoginLink
