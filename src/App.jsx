import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Forgetpwd from './pages/Forgetpwd'
import Resetpwd from './pages/Resetpwd'
import Layout from './pages/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget" element={<Forgetpwd />} />
          <Route path="/reset" element={<Resetpwd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App