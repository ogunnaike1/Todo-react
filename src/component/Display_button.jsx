import React, { useState } from 'react'
import First_input from './First_input'
import Second_input from './Second_input'

const Display_button = () => {
    const [firstInput, setFirstInput] = useState("")
    const [secondInput, setSecondInput] = useState("")
  

    const [displayFirst, setFirstDisplay] = useState("")
    const [displaySecond, setSecondDisplay] = useState("")
 
    const handleDisplay = () =>{
        setFirstDisplay(firstInput)
        setSecondDisplay(secondInput )
    }
  return (
    <div>
    <First_input firstInput ={firstInput} setFirstInput = {setFirstInput}/>
    <Second_input  secondInput = {secondInput} setSecondInput={setSecondInput} />
        <p>{displayFirst}</p>
        <p>{displaySecond}</p>
        <button onClick={handleDisplay}>click</button>
    </div>
  )
}

export default Display_button