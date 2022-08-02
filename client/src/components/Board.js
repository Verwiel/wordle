import { useContext } from 'react'
import { wordleContext } from '../context/WordleProvider'
import BoardRow from './BoardRow'

const Board = () => {
  const { guessedWords, numberOfGuesses, currentWordIndex, keyboardValue, wordEvaluations } = useContext(wordleContext)

  const boardRowMap = [...Array(numberOfGuesses).keys()].map(row => (
    <BoardRow 
      guessedWord={currentWordIndex === row ? keyboardValue : guessedWords[row]} 
      evaluations={wordEvaluations} 
      key={row} 
      rowNumber={row}
    />
  ))


  return (
    <section className='board-wrap'>
      <div className='board'>
        {boardRowMap}
      </div>
    </section>
  )
}

export default Board
