import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/LandingPage'
import InternPage from './pages/InternPage'
import Founder from './pages/Founder'
import Admin from './pages/Admin'
import Adminlogin from './pages/Adminlogin'

const App = () => {
  return (
    <div>

     
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route path="/intern" element={<InternPage/>} />
        <Route path="/founder" element={<Founder/>} />
        <Route path='/head' element={<Adminlogin />}></Route>
        <Route path='/admin' element={<Admin />}></Route>

       
      </Routes>
    </div>
  )
}

export default App