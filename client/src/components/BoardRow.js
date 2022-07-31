import Tile from './Tile'

const BoardRow = ({ randomWord, guessedWord }) => {
  return (
    <div className='board-row'>
      <Tile randomWord={randomWord} guessedWord={guessedWord} index={0} />
      <Tile randomWord={randomWord} guessedWord={guessedWord} index={1} />
      <Tile randomWord={randomWord} guessedWord={guessedWord} index={2} />
      <Tile randomWord={randomWord} guessedWord={guessedWord} index={3} />
      <Tile randomWord={randomWord} guessedWord={guessedWord} index={4} />
    </div>
  )
}

export default BoardRow
