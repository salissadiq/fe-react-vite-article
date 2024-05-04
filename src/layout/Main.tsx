import React from 'react'
import Navbar from '../components/shared/Navbar'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className='w-[60%] mx-auto   rounded-md shadow-md px-10 py-10 '>
      <Outlet/>
      </div>      
    </div>
  )
}
