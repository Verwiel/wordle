
const Tile = ({ randomWord, index, guessedWord }) => {
  const targetLetter = randomWord[index]
  const guessedLetter = guessedWord[index]
  const letterIsInWord = randomWord.includes(guessedLetter)
  const correctLetter = targetLetter === guessedLetter

  const tileClass = correctLetter ? 'correct' : 
    letterIsInWord ? 'partial' : 
    guessedLetter !== undefined ? 'wrong': 'blank'

  return (
    <div className={`board-tile ${tileClass}`}>{guessedLetter}</div>
  )
}

export default Tile
