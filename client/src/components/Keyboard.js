import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Keyboard = () => {
  const keyboardKeys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''], 
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', <FontAwesomeIcon icon={faDeleteLeft} />]]

  const keyboardMap = keyboardKeys.map((row, i) => (
    <div key={i} className='keyboard-row'>
      {row.map((letter, i) => {
        if(letter !== ''){
          return (
            <button key={letter}>
              {letter}
            </button>
          )
        } else {
          return (
            <div className='keyboard-spacer' key={`spacer-${i}`}></div>
          )
        }
      })}
    </div>
  ))

  return (
    <section className='keyboard'>
      {keyboardMap}
    </section>
  )
}

export default Keyboard
