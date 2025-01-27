import React from 'react'

const First_input = ({firstInput, setFirstInput}) => {
  return (
  <input value={firstInput} onChange={(e)=> setFirstInput(e.target.value)} type="text" />
  )
}

export default First_input