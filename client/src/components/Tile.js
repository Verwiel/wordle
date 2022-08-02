import { useContext } from "react"
import { wordleContext } from '../context/WordleProvider'

const Tile = ({ index, guessedWord, evaluations }) => {
  const { randomWord } = useContext(wordleContext)
  const targetLetter = randomWord[index]
  const guessedLetter = guessedWord[index]
  const lettersClass = evaluations[index] === undefined ? 'blank' : evaluations[index]

  // console.log(randomWordArray.indexOf('S'))
  

  

  return (
    <div className={`board-tile ${lettersClass}`}>{guessedLetter}</div>
  )
}

export default Tile
