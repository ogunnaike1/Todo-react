import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const OneTodo = () => {
    const {index} = useParams()
    // const[onetodo, setOneTodo] = useState({})
    const users = JSON.parse(localStorage.getItem("localStorageTodo"))
   
    let user = users.find((user)=> user.index = index)
  return (
    <div>
        <h1>{user.title}</h1>
        <h1>{user.content}</h1>
    </div>
  )
}

export default OneTodo