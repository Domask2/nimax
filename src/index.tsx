import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/app.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { DataProvider } from './components/contex/DataContex'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>,
  </React.StrictMode>,
)
