import { useWordleCtx } from '../../context/WordleProvider'
import BoardRow from './BoardRow'


const Board = () => {
  const { numberOfGuesses, wordLength } = useWordleCtx()

  const boardRowMap = [...Array(numberOfGuesses).keys()].map(row => (
    <BoardRow 
      key={row} 
      rowNumber={row}
    />
  ))

  return (
    <section className='board-wrap'>
      <div className='board' style={{gridTemplateRows: `repeat(${wordLength + 1}, 1fr)`}}>
        {boardRowMap}
      </div>
    </section>
  )
}

export default Board
