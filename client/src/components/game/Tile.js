
const Tile = ({ index, guessedWord, evaluations }) => {
  const guessedLetter = guessedWord[index]
  const lettersClass = evaluations[index] === undefined ? 'blank' : evaluations[index]

  return (
    <div className={`board-tile ${lettersClass}`}>{guessedLetter}</div>
  )
}

export default Tile
