import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useUtilityCtx } from '../context/UtilityProvider'

const Header = () => {
  const { toggleModal } = useUtilityCtx()

  return (
    <header className='main-header'>
      <Link to='/' className='main-header-text'>
        <h1 >Wordle</h1>
      </Link>
      <span className='main-header-options'>
        {/* remove and just have the buttons to sign in from the modals? */}
        <Link to='/portal'>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <button onClick={() => toggleModal('open', 'help')}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </button>
        <button onClick={() => toggleModal('open', 'stats')}>
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
        <button onClick={() => toggleModal('open', 'settings')}>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </span>
    </header>
  )
}

export default Header
