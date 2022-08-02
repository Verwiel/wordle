import { useContext } from 'react'
import { wordleContext } from '../context/WordleProvider'
import Tile from './Tile'

const BoardRow = ({ guessedWord, evaluations, rowNumber }) => {
  const { wordLength } = useContext(wordleContext)

  const boardTileMap = [...Array(wordLength).keys()].map(tile => (
    <Tile 
      key={tile} 
      guessedWord={guessedWord} 
      evaluations={evaluations[rowNumber] === undefined ? [] : evaluations[rowNumber]} 
      index={tile} 
    />
  ))


  return (
    <div className='board-row'>
      {boardTileMap}
      {/* <Tile guessedWord={guessedWord} evaluations={evaluations[rowNumber]} index={0} />
      <Tile guessedWord={guessedWord} evaluations={evaluations[rowNumber]} index={1} />
      <Tile guessedWord={guessedWord} evaluations={evaluations[rowNumber]} index={2} />
      <Tile guessedWord={guessedWord} evaluations={evaluations[rowNumber]} index={3} />
      <Tile guessedWord={guessedWord} evaluations={evaluations[rowNumber]} index={4} /> */}
    </div>
  )
}

export default BoardRow
