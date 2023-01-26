import React from 'react'

function Map3() {
    const a=[{name:"Niya",salary:50000},
{name:"Laya",salary:60000}]
  return (
    a.map((display)=>
    <div>
        <h2>{display.name},{display.salary}</h2>
    </div>
  ))
}

export default Map3