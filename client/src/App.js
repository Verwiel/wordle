import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WordleLanding from './pages/WordleLanding'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/wordle' element={<WordleLanding/>}/>
    </Routes>
  )
}

export default App
