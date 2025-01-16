import React from 'react'
import { Route, Routes } from 'react-router-dom'
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