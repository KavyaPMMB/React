import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Nav1() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/StateCard">more</Nav.Link>
            <Nav.Link href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fvarious-fast-food-products-picture-id908663850%3Fk%3D6%26m%3D908663850%26s%3D170667a%26w%3D0%26h%3DDW6K7lWUMmsXvHlHRBwIFEVofjpztlozVBuOF-DuCm8%3D&f=1&nofb=1&ipt=bfe2d00207686e2a3fc89240575a7e27361204f3a9ad80eca523df6f07bab683&ipo=images">Product</Nav.Link>
            <Nav.Link href="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FBeautiful-nature-cool-images-background-hd.jpg&f=1&nofb=1&ipt=a62e972328b84f93fba6784217ac3a34d21222e7d436bee9eecac0a9cccf0c69&ipo=images">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav1