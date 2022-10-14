import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useWordleCtx } from '../../context/WordleProvider'


const Keyboard = () => {
  const { addLetter, removeLetter, guessWord, showingGameOver, keyboardKeys } = useWordleCtx()

  // const allGuessedWords = guessedWords.flat()
  let keyboardRow1 = keyboardKeys.filter(key => key.row === 0)
  let keyboardRow2 = keyboardKeys.filter(key => key.row === 1)
  let keyboardRow3 = keyboardKeys.filter(key => key.row === 2)

  const keyboardMap = (data) => data.map((letter, i) => {
    let letterValue = letter.letter === 'DELETE' ? <FontAwesomeIcon icon={faDeleteLeft} /> : letter.letter

    if(letter.letter !== ''){
      return (
        <button 
          key={letter.letter} 
          disabled={showingGameOver} 
          onClick={
            letter.letter === 'ENTER' ?
            guessWord : letter.letter === 'DELETE' ?
            removeLetter :
            (e) => addLetter(e, letter.letter)
          }
          className={letter.status}
        >
          {letterValue}
        </button>
      )
    } else {
      return (
        <div className='keyboard-spacer' key={`spacer-${i}`}></div>
      )
    }
  })
  
  return (
    <form className='keyboard'>
      <div className='keyboard-row'>
        {keyboardMap(keyboardRow1)}
      </div>
      <div className='keyboard-row'>
        {keyboardMap(keyboardRow2)}
      </div>
      <div className='keyboard-row'>
        {keyboardMap(keyboardRow3)}
      </div>
    </form>
  )
}

export default Keyboard
