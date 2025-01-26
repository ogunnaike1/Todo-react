import React from 'react'

const Second_input = ({secondInput, setSecondInput}) => {
    const [secondInput, setSecondInput] = useState("")
  return (
   <input onChange={(e)=> setSecondInput(e.target.value)} type="text" />
  )
}

export default Second_input