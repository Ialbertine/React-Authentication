import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-[#262526]'>
        <NavBar/>
        <div className='h-screen'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout