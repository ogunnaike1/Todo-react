import React from 'react'

const Second_input = ({handleSecondInput}) => {
  return (
   <input onChange={(e)=> handleSecondInput(e.target.value)} type="text" />
  )
}

export default Second_input