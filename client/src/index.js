import React from 'react'
import ReactDOM from 'react-dom/client'
import decode from 'jwt-decode'
import { BrowserRouter } from 'react-router-dom'
import { WordleProvider } from './context/WordleProvider'
import { AuthProvider } from './context/AuthProvider'
import { UtilityProvider } from './context/UtilityProvider'
import App from './App'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

let wordleStorage = JSON.parse(localStorage.getItem("wordleClone"))
let decodedJwt = decode(wordleStorage.token)

root.render(
  <React.StrictMode>
    <UtilityProvider storedUser={decodedJwt.user} >
      <AuthProvider storedUser={decodedJwt.user} >
        <WordleProvider storedUser={decodedJwt.user} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WordleProvider>
      </AuthProvider>
    </UtilityProvider>
  </React.StrictMode>
)
