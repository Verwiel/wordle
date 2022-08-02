import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useWordleCtx } from '../context/WordleProvider'


const Keyboard = () => {
  const { addLetter, removeLetter, guessWord, gameStatus } = useWordleCtx()

  const keyboardKeys = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''], 
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']]

  const keyboardMap = keyboardKeys.map((row, i) => (
    <div key={i} className='keyboard-row'>
      {row.map((letter, i) => {
        let letterValue = letter === 'DELETE' ? <FontAwesomeIcon icon={faDeleteLeft} /> : letter
        
        if(letter !== ''){
          return (
            <button 
              key={letter} 
              disabled={gameStatus === 'COMPLETE' || gameStatus === 'FINISHED'} 
              onClick={
                letter === 'ENTER' ?
                guessWord : letter === 'DELETE' ?
                removeLetter :
                (e) => addLetter(e, letter)
              }
            >
              {letterValue}
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
    <form className='keyboard'>
      {keyboardMap}
    </form>
  )
}

export default Keyboard
