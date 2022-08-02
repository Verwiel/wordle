import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import WordleProvider from './context/WordleProvider'
import App from './App'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <WordleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WordleProvider>
  </React.StrictMode>
)
