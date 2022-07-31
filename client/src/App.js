import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      {/* will need login and register routes eventually */}
    </Routes>
  )
}

export default App
