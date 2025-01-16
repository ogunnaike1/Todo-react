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
     
    </div>
  )
}

export default Input