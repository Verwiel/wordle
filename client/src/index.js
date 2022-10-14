import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WordleProvider } from './context/WordleProvider'
import { AuthProvider } from './context/AuthProvider'
import { UtilityProvider } from './context/UtilityProvider'
import App from './App'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UtilityProvider>
      <AuthProvider>
        <WordleProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WordleProvider>
      </AuthProvider>
    </UtilityProvider>
  </React.StrictMode>
)
