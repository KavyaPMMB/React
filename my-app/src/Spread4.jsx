import React, { useState } from 'react'

function Spread4() {
    const [first, setfirst] = useState({
        name:"James",salary:50000
    })
    const change=()=>{
        setfirst((prevobj=>{
            return{...prevobj,salary:70000}
        }))
    }
  return (
    <div>
        <h3>{first.name},{first.salary}</h3>
        <button onClick={change}>Change</button>
    </div>
  )
}

export default Spread4