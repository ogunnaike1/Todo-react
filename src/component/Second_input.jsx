import React from 'react'

const Second_input = ({secondInput, setSecondInput}) => {
  return (
   <input value ={secondInput} onChange={(e)=> setSecondInput(e.target.value)} type="text" />
  )
}

export default Second_input