import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Portal from './pages/Portal'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/portal' element={<Portal/>}/>
        <Route path='/login/:user' element={<Login/>}/>
        <Route path='/register/:user' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
