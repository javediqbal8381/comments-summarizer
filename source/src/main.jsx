import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const elm = document.createElement('div')

ReactDOM.createRoot(elm).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
