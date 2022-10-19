import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const wordleContext = createContext()

export const useWordleCtx = () => useContext(wordleContext)


export const WordleProvider = ({ children, storedUser }) => {
  // Location of keys on keyboard and their status (correct, present, or absent)
  const initialKeyboardKeys = [
    {letter: 'Q', status: '', row: 0}, {letter: 'W', status: '', row: 0}, {letter: 'E', status: '', row: 0}, {letter: 'R', status: '', row: 0}, {letter: 'T', status: '', row: 0}, {letter: 'Y', status: '', row: 0}, {letter: 'U', status: '', row: 0}, {letter: 'I', status: '', row: 0}, {letter: 'O', status: '', row: 0}, {letter: 'P', status: '', row: 0},
    {letter: '', status: '', row: 1}, {letter: 'A', status: '', row: 1}, {letter: 'S',  status: '', row: 1}, {letter: 'D', status: '', row: 1}, {letter: 'F', status: '', row: 1}, {letter: 'G', status: '', row: 1}, {letter: 'H', status: '', row: 1}, {letter: 'J', status: '', row: 1}, {letter: 'K', status: '', row: 1}, {letter: 'L', status: '', row: 1}, {letter: '', status: '', row: 1},
    {letter: 'ENTER', status: '', row: 2}, {letter: 'Z', status: '', row: 2}, {letter: 'X', status: '', row: 2}, {letter: 'C', status: '', row: 2}, {letter: 'V', status: '', row: 2}, {letter: 'B', status: '', row: 2}, {letter: 'N', status: '', row: 2}, {letter: 'M', status: '', row: 2}, {letter: 'DELETE', status: '', row: 2}
  ]

  const numberOfGuesses = 6
  let initialGuessedWordsArray = Array(numberOfGuesses).fill('')
  const wordLength = 5
  const [gameStatus, setGameStatus] = useState("IN PROGRESS")
  const [randomWord, setRandomWord] = useState('')
  const [wordDescription, setWordDescription] = useState('test')
  const [keyboardValue, setKeyboardValue] = useState([])
  const [guessedWords, setGuessedWords] = useState(initialGuessedWordsArray)
  const [wordEvaluations, setWordEvaluations] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(guessedWords.indexOf(''))
  const [showingGameOver, setShowingGameOver] = useState(false)
  const [keyboardKeys, setKeyboardKeys] = useState(initialKeyboardKeys)
  // correct, absent, present, or blank


  const markKeyboardKey = (guessedWordArray) => {
    guessedWordArray.forEach((letter, i) => {
      let updatedKeys = keyboardKeys.map(key => {
        if(key.letter === letter){
          let lettersIndex = randomWord.indexOf(key.letter)
          // no need to update if its already correct
          if(key.status === '' || key.status === 'present'){
  
            if(guessedWordArray[lettersIndex] === letter){
              key.status = 'correct'
            } else if(randomWord.includes(letter)) {
              key.status = 'present'
            } else {
              key.status = 'absent'
            }
          }
        }
        return key
      })
  
      setKeyboardKeys(updatedKeys)
    })
  }

  const fetchRandomWord = async () => {
    try {
      let res = await axios.get(`random-word?length=${wordLength}`)
      let word = res.data.word
      setRandomWord(word.toUpperCase())
      // setWordDescription('')
    } catch(err) {
      console.log(err)
    }
  }

  // used on the game over panel to start a new game
  const resetBoard = () => {
    // clear state
    setGameStatus("IN PROGRESS")
    setKeyboardValue([])
    setGuessedWords(initialGuessedWordsArray)
    setWordEvaluations([])
    setCurrentWordIndex(0)
    setShowingGameOver(false)
    setKeyboardKeys(initialKeyboardKeys)
    // reset word
    fetchRandomWord()
  }
  
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

  const guessWord = async (e) => {
    e.preventDefault()
    // validate that the word is long enough
    if(keyboardValue.length < 5){
      alert('Not Enough Letters')
    } else {
      let guessedWord = keyboardValue.join('')
      // axios to make sure word exists
      try {
        let res = await axios.get(`/check-word?word=${guessedWord}&length=${wordLength}`)
        if(res.data){
          // if word exists
          guessedWords[currentWordIndex] = guessedWord
          setGuessedWords(guessedWords)
          evaluateGuessedWord(guessedWord)
          setCurrentWordIndex(guessedWords.indexOf(''))
          setKeyboardValue([])
        } else {
          alert('Not in word list')
        }
      } catch(err) {
        console.log(err)
        alert('Server error')
      }
    }
  }

  const createGameRecord = async (status) => {
    console.log(storedUser)
    let currentStreak = 0
    let maxStreak = storedUser.maxStreak
    if(status === 'win'){
      currentStreak = storedUser.currentStreak + 1
      if(currentStreak > storedUser.maxStreak){
        maxStreak = storedUser.maxStreak + 1
      }
    }

    storedUser.currentStreak = currentStreak
    storedUser.maxStreak = maxStreak

    let body = {
      gameData: {
        outcome: status,
        guesses: 1,
        wordLength: wordLength,
        userId: storedUser.id
      },
      userData: storedUser
    } 

    try {
      let res = await axios.post('/submit-game', body)
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  const evaluateGuessedWord = async ( guessedWord ) => {
    const evaluations = wordEvaluations
    const randomWordArray = randomWord.split('')
    const guessedWordArray = guessedWord.split('')

    // if the word is correct
    if(randomWord === guessedWord){
      evaluations.push(Array(wordLength).fill('correct'))
      createGameRecord('win')
      setWordEvaluations(evaluations)
      setGameStatus("COMPLETE")
      setShowingGameOver(true)
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

      markKeyboardKey(guessedWordArray)

      uniqueSharedLetters.forEach(letter => {
        let actualIndexes = getAllIndexes(randomWordArray, letter);
        let guessIndexes = getAllIndexes(guessedWordArray, letter);

        // set keyboard validation

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
        setShowingGameOver(true)
      }
    }
  }

  console.log(randomWord)

  return (
    <wordleContext.Provider value={{
      keyboardKeys,
      wordDescription,
      showingGameOver,
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
      wordEvaluations,
      fetchRandomWord,
      resetBoard
    }}>
      {children}
    </wordleContext.Provider>
  )
}
