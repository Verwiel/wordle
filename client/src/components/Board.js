import BoardRow from './BoardRow'

const Board = ({ randomWord, guessedWords }) => {
  return (
    <section className='board-wrap'>
      <div className='board'>
        {/* called 6 times because there will always be 6 tries */}
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[0]} />
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[1] ? guessedWords[1] : ''} />
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[2] ? guessedWords[2] : ''} />
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[3] ? guessedWords[3] : ''} />
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[4] ? guessedWords[4] : ''} />
        <BoardRow randomWord={randomWord} guessedWord={guessedWords[5] ? guessedWords[5] : ''} />
      </div>
    </section>
  )
}

export default Board
