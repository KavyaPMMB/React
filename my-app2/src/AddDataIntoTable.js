import React, { useState } from 'react'

function AddDataIntoTable() {
  const [cars, setCars] = useState([{name:"BMW",color:"black"},{name:"Ford",color:"white"}])
  const ob={name:"Baleno",color:"blue"}
  const array=[{name:"Audi",color:"black"},{name:"Ferrari",color:"white"}]

  const addCar = () => {
    setCars([...cars, ob])
  }

  return (
    <div>
        
        <table>
            <tr>
                <th>CAR</th>
                <th>COLOR</th>
            </tr>
            {cars.map((display)=>
            <tr>
                <td>{display.name}</td>
                <td>{display.color}</td>
            </tr>
             )}
        </table>
        <button onClick={addCar}>Add Car</button>
    </div>
  )
}

export default AddDataIntoTable
