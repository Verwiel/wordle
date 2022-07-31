import { useState } from 'react'
import axios from 'axios'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'

const Homepage = () => {
  const [guessedWords, setGuessedWords] = useState(['CHECK'])
  // once a word is guessed, bounce animation then pop up statistics modal
  
  const fetchRandomWord = async () => {
    try {
      let res = await axios.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  // fetchRandomWord()

  const randomWord = 'STEIN'
  // const gameOver = guessedWord === randomWord

  return (
    <main className='homepage'>
      <Board randomWord={randomWord} guessedWords={guessedWords} />
      <Keyboard randomWord={randomWord} />
    </main>
  )
}

export default Homepage
