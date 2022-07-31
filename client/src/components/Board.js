import BoardRow from './BoardRow'

const Board = () => {
  return (
    <section className='board-wrap'>
      <div className='board'>
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
      </div>
    </section>
  )
}

export default Board
