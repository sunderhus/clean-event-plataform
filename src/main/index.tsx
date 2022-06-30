import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/main/config/styles/global.css'
import { Event } from '@/presentation/pages'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Event />
  </React.StrictMode>
)
