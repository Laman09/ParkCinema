import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Cinemas from './components/Cinemas/Cinemas'
import Campaigns from './components/Campaigns/Campaigns'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp/SIgnUp'
import { SelectionsProvider } from './contexts/SelectionsContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectionsProvider>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Layout />}>
            <Route index element = {<Home />}></Route>
            <Route path = '/az' element = {<Home />}></Route>
            <Route path = '/az/cinemas' element = {<Cinemas />}></Route>
            <Route path = '/az/campaigns' element = {<Campaigns />}></Route>
            <Route path = '/az/faq' element = {<FAQ />}></Route>
            <Route path = '/az/contact' element = {<Contact />}></Route>
            <Route path = '/az/sign-in' element = {<SignIn />}></Route>
            <Route path = '/az/sign-up' element = {<SignUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SelectionsProvider>
  </StrictMode>
)
