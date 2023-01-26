import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'
import { BsFillAlarmFill } from 'react-icons/bs'
import './Icon1.css'
function Icon1() {
  return (

        <div>
            <MDBCard className='icon'>
      <MDBCardBody>
      <BsFillAlarmFill className="icon1"/>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default Icon1