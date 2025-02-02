import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Home = () => {
    const {index} = useParams()
    const users = JSON.parse(localStorage.getItem("localStorageDetails"))
    let user = users.find((user) => user.index === index);
  return (
    <>
    <div className='flex justify-between'>
     <div className=''>
     <SideNav/>
     </div>
     <div className=' w-[84%] h-[93vh] '>
     <h1>{`welcome ${user.username}`}</h1>
     <Outlet/>
     </div>
     </div>

    </>
   
  )
}

export default Home