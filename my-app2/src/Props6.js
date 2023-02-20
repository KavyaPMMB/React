import React, { useState } from 'react'
import Props7 from './Props7'

function Props6() {
    const ob={emp:"John",salary:30000}
    const array=[{name:"James",age:37},{name:"Paul",age:39}]
    const array2=[{name:"kavya",age:24},{name:"Paul",age:39}]
    const [first, setfirst] = useState(array)
  return (
    <div>
        <Props7 first={first} ob={ob} setfirst={setfirst} array2={array2}/>
    </div>
  )
}

export default Props6