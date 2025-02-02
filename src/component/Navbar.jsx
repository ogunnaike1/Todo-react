import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <div className="flex h-[7vh] ml-[16%] w-[84%] bg-white items-center justify-around ">
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Contact Us</Link>
      
    </div>
  )
}

export default Navbar