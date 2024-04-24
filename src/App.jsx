import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
       </Routes>
    </BrowserRouter>
     
  )
}

export default App