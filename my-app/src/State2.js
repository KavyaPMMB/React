import React, { useState } from 'react'

function State2() {
    const [num, setnum] = useState(0);
  return (
    <div>
        <h1>my name is {num}</h1>
        <button onClick={() => setnum(num+1)}>+</button><br></br>
        <button onClick={() => setnum(num-1)}>-</button>
    </div>
  )
}

export default State2