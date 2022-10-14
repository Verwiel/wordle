import { useWordleCtx } from '../../context/WordleProvider'
import BoardRow from './BoardRow'


const Board = () => {
  const { numberOfGuesses } = useWordleCtx()

  const boardRowMap = [...Array(numberOfGuesses).keys()].map(row => (
    <BoardRow 
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
