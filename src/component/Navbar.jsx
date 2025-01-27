import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <li>
        <Link to="/">Home</Link>
        {/* <a href=""></a> */}
        </li>
        <li>About</li>
        <li>contact</li>
    </div>
  )
}

export default Navbar