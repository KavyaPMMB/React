import React from 'react'
import { useState } from 'react';

function Statewithconditn() {
    const [num, setnum] = useState(0);

    const Decrement = () => {
        if (num <= 0) {
            alert("Cannot decrease value below 0");
        } else {
            setnum(num - 1);
        }
    }

  return (
    <div>
        <h1>my name is {num}</h1>
            <button onClick={() => setnum(num+1)}>+</button><br></br>
            <button onClick={Decrement}>-</button>
    </div>
  )
}

export default Statewithconditn