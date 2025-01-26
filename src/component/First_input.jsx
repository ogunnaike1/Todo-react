import React from 'react'

const First_input = ({setFirstInput, firstInput}) => {
    const [firstInput, setFirstInput] = useState("")
  return (
  <input onChange={(e)=> setFirstInput(e.target.value)} type="text" />
  )
}

export default First_input