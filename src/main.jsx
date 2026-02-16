// This is the starting point of our entire React application.
// It finds the 'root' element in our HTML and injects the App component there.

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles for the whole website
import App from './App.jsx' // Our main App component

createRoot(document.getElementById('root')).render(
  // StrictMode helps us find potential bugs during development
  <StrictMode>
    <App />
  </StrictMode>,
)
