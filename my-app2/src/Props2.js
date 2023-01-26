import React from 'react'

const Props2 = (Props) => {
    const first=Props.first
    console.log(first)
  return (
    first.map((display)=>
    <div>
    
        <h1>{display.no},{display.name}</h1>
        
    </div>
  ))
}

export default Props2