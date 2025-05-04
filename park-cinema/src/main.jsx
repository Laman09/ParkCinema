import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import FAQ from './components/FAQ/FAQ'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout />}>
          <Route index element = {<Home />}></Route>
          <Route path = '/az/faq' element = {<FAQ />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
