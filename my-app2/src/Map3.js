import React from 'react'

function Map3() {
    const flowers=[{name:"Rose",color:"red"},
{name:"Jasmine",color:"white"}]
  return (
    flowers.map((display)=>
    <div>
        <p>{display.name},{display.color}</p>
    </div>
  ))
}

export default Map3