import React from 'react'
import { useState } from 'react'

function SpreadOp() {
    const array=[{name:"Kavya",age:24},{name:"James",age:27},{name:"Saara",age:24}]
    const ob={name:"John",age:34}
    const [first, setfirst] = useState(array)
    const add=()=>
    {
        const arraynew=[...first,ob]
        setfirst(arraynew)
    }
  return (
    <div style={{width:"20%",height:"30%",display:"flex"}}>
        {first.map((display)=>(
        
        <div style={{border:"1px solid black",marginRight:"20px",borderRadius:"15px",display:"flex"}}>
        <h1>{display.name}</h1><br></br>
        <h1>{display.age}</h1>
        </div>
        
        ) )   
}
<button className='btn btn-primary' onClick={add}>Add</button>
    </div>
  )
}

export default SpreadOp