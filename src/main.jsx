import React from 'react'
import ReactDOM from 'react-dom/client'
import WrapperContext from './context'
import Home from './Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WrapperContext>
      <Home />
    </WrapperContext>
  </React.StrictMode>
)
