import decode from 'jwt-decode'
import { WordleProvider } from './context/WordleProvider'
import { AuthProvider } from './context/AuthProvider'
import { useUtilityCtx } from './context/UtilityProvider'
import Header from './components/Header'
import ProjectRoutes from './ProjectRoutes'
import Modal from './components/Modal'


function App() {
  const { modalOpen } = useUtilityCtx()
  let storedToken = localStorage.getItem("wordleClone")
  let decodedJwt = storedToken ? decode(storedToken) : ''
  
  return (
    <AuthProvider storedUser={decodedJwt.user} >
      <WordleProvider storedUser={decodedJwt.user} >
        <Header />
        {modalOpen &&
          <Modal />
        }
        <ProjectRoutes />
      </WordleProvider>
    </AuthProvider>
  )
}

export default App
