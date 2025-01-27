import React, { useState } from 'react'
import First_input from './First_input'
import Second_input from './Second_input'

const Display_button = () => {
    let firstInput;
    let secondInput;
    // const [firstInput, setFirstInput] = useState("")
    // const [secondInput, setSecondInput] = useState("")

    const [displayFirst, setFirstInput] = useState("")
    const [displaySecond, setSecondInput] = useState("")
 
    const handleDisplay = () =>{
        setFirstInput(firstInput)
        setSecondInput(secondInput )
    }
  return (
    <div>
    <First_input firstInput ={firstInput} setFirstInput= {setFirstInput}/>
    <Second_input  secondInput = {secondInput} setSecondInput={setSecondInput} />
        <p>{displayFirst}</p>
        <p>{displaySecond}</p>
        <button onClick={handleDisplay}>click</button>
    </div>
  )
}

export default Display_button