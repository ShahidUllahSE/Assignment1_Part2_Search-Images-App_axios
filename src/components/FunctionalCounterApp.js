import React, { useState } from 'react'

const FunctionalCounterApp = () => {
    const [counter,setCounter]=useState(0)
const handlePlus=()=>{
setCounter(counter+1)
}


const handleMinus=()=>{

    setCounter(counter-1)
}
const handleReset=()=>{
    setCounter(0)
}
  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={handlePlus}>plus</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>Reest</button>

    </div>
  )
}

export default FunctionalCounterApp
