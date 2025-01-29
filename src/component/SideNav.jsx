import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='bg-slate-900 absolute top-0 flex flex-col h-[100vh] justify-between pl-[25px]  w-[16%] text-white text-sm'>
        <h1 className='text-[20px] mt-5'>SQi Student Portal</h1>
        <Link to='/home/dashboard'>Dashboard</Link>
        <Link to="/home/myprofile">My Profile</Link>
        <Link to="/home/changepassword">Change Password</Link>
        <Link to="/home/documents">Documents</Link>
        <Link to="/home/course_registration">Course Registration</Link>
        <Link to="/home/resources">Resources</Link>
        <Link to="/home/registrationhistory">Registration History</Link>
        <Link>View Timetable</Link>
        <Link>Pay Tuition</Link>
        <Link>Noticed Board</Link>
        <Link>Accomodation</Link>
    </div>
  )
}

export default SideNav