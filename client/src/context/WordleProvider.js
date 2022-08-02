import { createContext, useState, useContext } from 'react'
// import axios from 'axios'

const wordleContext = createContext()

export const useWordleCtx = () => useContext(wordleContext)


export const WordleProvider = ({ children }) => {
  const numberOfGuesses = 6
  let initialGuessedWordsArray = Array(numberOfGuesses).fill('')
  const wordLength = 5
  const [gameStatus, setGameStatus] = useState("IN PROGRESS")
  const [randomWord, setRandomWord] = useState('STEEP')
  const [keyboardValue, setKeyboardValue] = useState([])
  const [guessedWords, setGuessedWords] = useState(initialGuessedWordsArray)
  const [wordEvaluations, setWordEvaluations] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(guessedWords.indexOf(''))

  // const fetchRandomWord = async () => {
    // try {
    //   let res = await axios.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
    //   console.log(res)
    //   // setRandomWord('')
    // } catch(err) {
    //   console.log(err)
    // }
  // }
  
  const addLetter = (e, letter) => {
    e.preventDefault()
    if(keyboardValue.length < wordLength){
      setKeyboardValue([...keyboardValue, letter])
    }
  }

  const removeLetter = (e) => {
    e.preventDefault()
    if (keyboardValue.length > 0) {
      setKeyboardValue([
        ...keyboardValue.slice(0, -1)
      ])
    }
  }

  const guessWord = (e) => {
    e.preventDefault()
    // validate that the word is long enough
    if(keyboardValue.length < 5){
      alert('Not Enough Letters')
    } else {
      let guessedWord = keyboardValue.join('')
      // axios to make sure word exists
      // try {
      //   let res = await axios.get(`http://api.wordnik.com/v4/words.json/randomWord?api_key=${process.env.REACT_APP_WORDNIK_API_KEY}`)
      //   console.log(res)
        
        // if word exists
        guessedWords[currentWordIndex] = guessedWord
        setGuessedWords(guessedWords)
        evaluateGuessedWord(guessedWord)
        setCurrentWordIndex(guessedWords.indexOf(''))
        setKeyboardValue([])
      // } catch(err) {
      //   console.log(err)
      // }
    }
  }

  const evaluateGuessedWord = ( guessedWord ) => {
    const evaluations = wordEvaluations
    const randomWordArray = randomWord.split('')
    const guessedWordArray = guessedWord.split('')

    // if the word is correct
    if(randomWord === guessedWord){
      evaluations.push(Array(wordLength).fill('correct'))
      setWordEvaluations(evaluations)
      setGameStatus("COMPLETE")
    } else {
      let baseEvaluations = Array(wordLength).fill('absent')
      let sharedLetters = guessedWordArray.filter(letter => randomWordArray.includes(letter));
      let uniqueSharedLetters = new Set(sharedLetters)
      
      // use to find all occurrences of a letter
      function getAllIndexes(arr, val) {
        let indexes = [], i = -1
        while ((i = arr.indexOf(val, i+1)) !== -1){
          indexes.push(i)
        }
        return indexes
      }

      uniqueSharedLetters.forEach(letter => {
        let actualIndexes = getAllIndexes(randomWordArray, letter);
        let guessIndexes = getAllIndexes(guessedWordArray, letter);

        if(guessIndexes.length > 1 && actualIndexes.length > 1){
          // you guessed multiple and there are multiple: 
          // mark each correct index
          let correctIndexes = []
          guessIndexes.forEach(index => {
            if(actualIndexes.includes(index)){
              baseEvaluations[index] = 'correct'
              correctIndexes.push(index)
            }
          })

          // find indexes that are not correct
          let firstPresentIndex = guessIndexes.filter(index => !actualIndexes.includes(index))
          // if there is another occurence of this letter but its incorrect, mark the first as present
          if(firstPresentIndex.length > 0 && correctIndexes.length < actualIndexes.length ){
            baseEvaluations[firstPresentIndex[0]] = 'present'
          }

        } else {
          // you guessed 1 and there is 1: mark correct or present
          if(actualIndexes.length === 1 && guessIndexes.length === 1){
            baseEvaluations[guessIndexes] = actualIndexes[0] === guessIndexes[0] ? 'correct' : 'present'
          }
          // you guessed 1 and there are multiple: mark correct or present
          else if(actualIndexes.length > 1 && guessIndexes.length === 1){
            baseEvaluations[guessIndexes] = actualIndexes.includes(guessIndexes[0]) ? 'correct' : 'present'
          }
          // you guessed multiple but theres only 1: mark first correct or present
          else if(actualIndexes.length === 1 && guessIndexes.length > 1){
            let actualIndex = randomWordArray.indexOf(letter)

            baseEvaluations[actualIndex] = guessIndexes.includes(actualIndex) ? 'correct' : 'present'
          }          
        }
      })

      evaluations.push(baseEvaluations)
      setWordEvaluations(evaluations)

      // End the game if the max number of guesses has been reached
      if(currentWordIndex + 1 === numberOfGuesses){
        setGameStatus("FINISHED")
      }
    }
  }

  return (
    <wordleContext.Provider value={{
      numberOfGuesses,
      wordLength,
      currentWordIndex,
      guessedWords, 
      setGuessedWords, 
      randomWord, 
      keyboardValue,
      gameStatus,
      guessWord,
      addLetter,
      removeLetter,
      wordEvaluations
    }}>
      {children}
    </wordleContext.Provider>
  )
}
