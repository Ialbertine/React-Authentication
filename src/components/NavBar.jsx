import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-10 overflow-hidden">
      <img src="./logo.svg" alt="logo" />
      <div className="flex gap-4 text-2xl text-white">
        <Link to="/signin" className="hover:text-[#d7a341] duration-500">
          SignIn
        </Link>
        <Link to="/signup" className="hover:text-[#d7a341] duration-500">
          SignUp
        </Link>
      </div>
    </nav>
  );
}

export default NavBar