import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
import "./Flipcart.css";

function Seller() {
  return (
    <div>
        <Navbar className="nav" bg="secondary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="logoseller"
              src="https://static-assets-web.flixcart.com/fk-sp-static/images/fk-logo-pre-login-v3.svg"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              
              

              <Nav.Link className="navlink1" href="/FeeStructure.jsx">
                Fee Structure
              </Nav.Link>
              <Nav.Link className="navlink1" href="#action1">
                Services
              </Nav.Link>
              <Nav.Link className="navlink1" href="#action1">
                Resources
              </Nav.Link>
             
             
              <Button variant="light" className="login">
                Login
              </Button>
              <Button variant="warning" className="login">
                Start Selling
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmallbusinessbonfire.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fbusiness-analyst.jpg&f=1&nofb=1&ipt=29fab1f87eb50c5ea54aefa9a7a0890d073358894b035894902485835d954322&ipo=images'/>

    </div>
  )
}

export default Seller