import React from 'react'
import { Link } from 'react-router-dom'

const signIn = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center  bg-[#4ba694]">
      <h1 className="mb-8 font-bold text-3xl">LOGO HERE</h1>
      <div className=" flex flex-col items-center justify-center py-5 w-[70%] h-[60%] lg:w-[40%] lg:h-[60%] bg-[#d1aa4e] rounded-3xl">
        <h1 className="text-2xl font-medium mb-7">SIGN IN</h1>
        <form className="flex flex-col gap-6 w-full px-6 lg:px-10 ">
          <input
            type="text"
            placeholder="Email"
            className="py-3 px-3 rounded-lg hover:shadow-md bg-[#fdfdfd] hover:bg-[#393639] hover:text-[white]  transition-all duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-3 px-3 rounded-lg hover:shadow-md bg-[#fdfdfd] hover:bg-[#393639] hover:text-[white]  transition-all duration-500"
          />
        </form>
        <button className="w-[40%] mt-5 py-2 bg-[#5ebad3] text-[#3b429a] font-bold rounded-lg mb-4 hover:bg-[#0b8bb2] hover:text-[white]">
          Sign In
        </button>
        <div className="flex gap-2">
          <p>Already does not have an account?</p>
          <Link to="/" className="text-[#ea3547] font-semibold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default signIn