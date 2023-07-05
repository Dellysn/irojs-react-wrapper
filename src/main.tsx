import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ColorPicker from './component/iro-color-picker'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorPicker />
  </React.StrictMode>,
)
