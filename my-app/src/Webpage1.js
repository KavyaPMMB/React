import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';

function Webpage1() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fvarious-fast-food-products-picture-id908663850%3Fk%3D6%26m%3D908663850%26s%3D170667a%26w%3D0%26h%3DDW6K7lWUMmsXvHlHRBwIFEVofjpztlozVBuOF-DuCm8%3D&f=1&nofb=1&ipt=bfe2d00207686e2a3fc89240575a7e27361204f3a9ad80eca523df6f07bab683&ipo=images">Product</Nav.Link>
            <Nav.Link href="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FBeautiful-nature-cool-images-background-hd.jpg&f=1&nofb=1&ipt=a62e972328b84f93fba6784217ac3a34d21222e7d436bee9eecac0a9cccf0c69&ipo=images">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F05%2FSky-Desktop-Backgrounds-Hd-Images.jpg&f=1&nofb=1&ipt=5a7bede37ae4fd8c91fe4240fb8c7e36db8956a5ca25b61af807fb5ac5c151b8&ipo=images"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FCool-Nature-Background-Images-4523x2590.jpg&f=1&nofb=1&ipt=64e166f9b13d32cdc94372eaf0ce880e28b13d1d68556a3ef1aacad8847133f1&ipo=images"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Webpage1