import React from 'react'
import mainNavbar from './Components/mainNavbar'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './pages/mainpage'
import Landingpage from './pages/Landingpage'
import InternPage from './pages/InternPage'
import Founder from './pages/Founder'
import Admin from './pages/Admin'

const App = () => {
  return (
    <div>

     
      <Routes>
        <Route path='/' element={<Landingpage />}></Route>
        <Route path="/intern" element={<InternPage/>} />
        <Route path="/founder" element={<Founder/>} />
        <Route path='/admin' element={<Admin />}></Route>
       
      </Routes>
    </div>
  )
}

export default App