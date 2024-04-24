import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Forgetpwd from './pages/Forgetpwd'
import Resetpwd from './pages/Resetpwd'


const App = () => {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/forget' element={<Forgetpwd/>}/>
        <Route path='/reset' element={<Resetpwd/>}/>
       </Routes>
    </BrowserRouter>
     
  )
}

export default App