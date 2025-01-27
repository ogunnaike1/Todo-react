import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className=''>
     <SideNav/>
     </div>
     <div className=''>
     <Outlet/>
     </div>

    </>
   
  )
}

export default Home