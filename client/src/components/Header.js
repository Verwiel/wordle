import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleQuestion, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='main-header'>
      {/* Just make a login button, this links to other games */}
      <button className='main-header-login'>
        <FontAwesomeIcon icon={faUser} />
      </button>

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
