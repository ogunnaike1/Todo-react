import React from 'react'

const First_input = ({handleFirstInput}) => {
  return (
  <input onChange={(e)=> handleFirstInput(e.target.value)} type="text" />
  )
}

export default First_input