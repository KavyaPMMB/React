import React from 'react'

function Map2() {
    const cars=[{name:"BMW",color:"Red"},
{name:"Ford",color:"white"}]
  return (cars.map((display)=>
    <div>
        <p>{display.name},{display.color}</p>
    </div>
  ))
}

export default Map2