import React, { useState } from 'react'

function Spread5() {
    const [first, setfirst] = useState({
        emp:"john",salary:40000
    })
    const change=()=>{
        setfirst((prevob)=>{
            return{...prevob,salary:50000}
        })
    }
  return (
    <div>
        <h2>Employee name is {first.emp} and his salary is {first.salary}</h2>
        <button onClick={change}>onClick</button>
    </div>
  )
}

export default Spread5