import { useWordleCtx } from '../../context/WordleProvider'
import Tile from './Tile'


const BoardRow = ({ rowNumber }) => {
  const { wordLength, guessedWords, wordEvaluations, currentWordIndex, keyboardValue } = useWordleCtx()

  const boardTileMap = [...Array(wordLength).keys()].map((tile, i) => (
    <Tile 
      key={tile} 
      guessedWord={currentWordIndex == rowNumber ? keyboardValue: guessedWords[rowNumber]} 
      evaluations={wordEvaluations[rowNumber] === undefined ? [] : wordEvaluations[rowNumber]} 
      rowIndex={rowNumber} 
      index={i}
    />
  ))

  return (
    <div className='board-row' style={{gridTemplateColumns: `repeat(${wordLength}, 1fr)`}}>
      {boardTileMap}
    </div>
  )
}

export default BoardRow
