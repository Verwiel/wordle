import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { UtilityProvider } from './context/UtilityProvider'
import App from './App'
import './styles/main.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <UtilityProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UtilityProvider>
  </React.StrictMode>
)
