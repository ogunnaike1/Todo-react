import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='bg-blue-500 flex flex-col h-[70vh] w-[30%]'>
        <Link to='/home/landing'>dashboard</Link>
        <Link to='/home/count'>Profile</Link>
        <Link>Document</Link>
        <Link>Courses</Link>
    </div>
  )
}

export default SideNav