import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import FAQ from './components/FAQ/FAQ'
import SignIn from './components/SignIn/SignIn'
import { SelectionsProvider } from './contexts/SelectionsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout />}>
            <Route index element = {<Home />}></Route>
            <Route path = '/az' element = {<Home />}></Route>
            <Route path = '/az/faq' element = {<FAQ />}></Route>
            <Route path = '/az/sign-in' element = {<SignIn />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SelectionsProvider>
  </StrictMode>,
)
