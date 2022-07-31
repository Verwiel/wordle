import axios from 'axios'

const WordleLanding = () => {

  const fetchRandomWord = async () => {
    try {
      let res = await axios.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      console.log(res)
    } catch(err) {
      console.log(err)
    }
  }

  // fetchRandomWord()


  return (
    <main>
      <header>
        <h1>Wordle</h1>
      </header>
    </main>
  )
}

export default WordleLanding
