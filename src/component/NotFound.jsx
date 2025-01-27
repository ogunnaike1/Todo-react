import React from 'react'
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    const goBack = () =>{
        navigate("/")

    }
  return (
    <>
    <div>NotFound</div>
    <button onClick={goBack}>Not FounD</button>
    </>
  )
}

export default NotFound