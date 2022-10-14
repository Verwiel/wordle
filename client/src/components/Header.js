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
        <Link to='/portal'>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <button onClick={() => toggleModal('help', 'open')}>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </button>
        <button onClick={() => toggleModal('stats', 'open')}>
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
        <button onClick={() => toggleModal('settings', 'open')}>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </span>
    </header>
  )
}

export default Header
