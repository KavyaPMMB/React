import React, { useState } from 'react'
import './Changecolor.css'

function Changecolor() {
    const [color,setcolor] = useState("Black");
    const textStyle = { color: color };
  return (
    <div>
        <h1 style={textStyle}>Text Color is {color}</h1>
        <button className='button'   id="red" onClick={() => setcolor("Red")}>Red</button>
        <button className='button' id="blue" onClick={() => setcolor("Blue")}>Blue</button>
        <button className='button' id="yellow" onClick={() => setcolor("Yellow")}>Yellow</button>
    </div>
  )
}

export default Changecolor