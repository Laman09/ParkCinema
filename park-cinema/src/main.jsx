import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Tickets from './components/Home/Movies/Tickets/Tickets'
import Cinemas from './components/Cinemas/Cinemas'
import Campaigns from './components/Campaigns/Campaigns'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp/SignUp'
import { SelectionsProvider } from './contexts/SelectionsContext'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SelectionsProvider>
  </StrictMode>
)
