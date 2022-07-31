import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        {/* will need login and register routes eventually */}
      </Routes>
    </>
  )
}

export default App
