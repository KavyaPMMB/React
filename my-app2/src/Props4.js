import React from 'react'

const Props4 = (Props3) => {
    const first=Props3.first
    console.log(first)
  return (
    first.map((display)=>
    <div>
        <p>{display.name},{display.color}</p>
    </div>
  ))
}

export default Props4