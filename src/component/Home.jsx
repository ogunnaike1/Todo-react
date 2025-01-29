import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='flex justify-between'>
     <div className=''>
     <SideNav/>
     </div>
     <div className=' w-[84%] h-[93vh] '>
     <Outlet/>
     </div>
     </div>

    </>
   
  )
}

export default Home