import axios from 'axios'

const Homepage = () => {

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

  return (
    <main>
      <header>
        <h1>Homepage</h1>
      </header>
    </main>
  )
}

export default Homepage
