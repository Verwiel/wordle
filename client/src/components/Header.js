import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='main-header'>
      {/* Just make a login button, this links to other games */}
      <Link className='main-header-login' to='/portal'>
        <FontAwesomeIcon icon={faUser} />
      </Link>

      <h1 className='main-header-text'>Wordle</h1>
      {/* All buttons open a modal */}
      <span className='main-header-options'>
        <button>
          <FontAwesomeIcon icon={faCircleQuestion} />
        </button>
        <button>
          <FontAwesomeIcon icon={faChartSimple} />
        </button>
        <button>
          <FontAwesomeIcon icon={faGear} />
        </button>
      </span>
    </header>
  )
}

export default Header
