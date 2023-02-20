import React from 'react'

function Maptable() {
    const cars=[{name:"BMW",color:"Red"},
{name:"Ford",color:"white"}]
  return (
    <table>
        <tr>
          <th>Name</th>
          <th>Color</th>
        </tr>

    
        {cars.map((display)=>
          <tr>
            <td>{display.name}</td>
            <td>{display.color}</td>
          </tr>
        )}
  
    </table>
  )
}

export default Maptable
