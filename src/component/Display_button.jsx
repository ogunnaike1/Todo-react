import React, { useState } from 'react'
import First_input from './First_input'
import Second_input from './Second_input'

const Display_button = () => {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
    const handleFirstInput = (value) =>{
        setFirstInput(value)
    }
    const handleSecondInput = (value) =>{
        setSecondInput(value)
    }
  return (
    <div>
    <First_input handleFirstInput = {handleFirstInput}/>
    <Second_input handleSecondInput = {handleSecondInput}/>
   
    </div>
  )
}

export default Display_button