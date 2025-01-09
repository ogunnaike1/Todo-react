import React, { useState } from 'react'

const Input = ({ placeholder, buttonText, onButtonClick }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [show, setShow] = useState("")
    const [addTodo, setAllTodo]= useState([]);

    const handleClick = () =>{
        let todoList = {
            title,
            content
        }
        setAllTodo([...addTodo, todoList])
    }

  return (
    <div className='flex justify-between flex-col items-center w-[40%] gap-3 m-auto '>
        <input className='w-[90%]' onChange={(e)=> setTitle(e.target.value)} placeholder="add a title"/>
        <input className='w-[90%]'  onChange={(e)=> setContent(e.target.value)} placeholder="add a task"/>
  
    </div>
  )
}

export default Input