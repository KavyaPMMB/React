import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BsFillCartFill, BsSearch } from "react-icons/bs";

import "./Flipcart.css";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
function Flipcart() {
  return (
    <div>
      <Navbar className="nav" bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="logo"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            />
            <br />
            <p class="plus">
              Explore <span className="plus2">Plus</span>
              <img
                width="10"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              />
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search for Products ,brands and more"
                  className="search"
                  aria-label="Search"
                />
              </Form>
              <Button variant="light" className="login">
                Login
              </Button>

              <Nav.Link className="navlink1" href="#action1">
                Become a seller
              </Nav.Link>
              <NavDropdown
                className="navlink2"
                title="More"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <BsFillCartFill className="icon2" />
              <Nav.Link className="navlink3" href="#">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="banner">
        <a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            />
            <div class="product">Mobiles</div>
          </div>
        </div>
        </a>
        <a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            />
            <div class="product">Fashion</div>
          </div>
        </div>
        </a>
        <a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            />
            <div class="product">Electronics</div>
          </div>
        </div>
        </a>
        <a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            />
            <div class="product">Home</div>
          </div>
        </div>
        </a>
        <a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
            />
            <div class="product">Appliences</div>
          </div>
        </div>
</a>
<a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            />
            <div class="product">Beauty and Toys</div>
          </div>
        </div>
</a>
<a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            />
            <div class="product">Grocery</div>
          </div>
        </div>
</a>
<a href="#" className="atag">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            />
            <div class="product">Top Offers</div>
          </div>
        </div>
</a>
<a href="#">
        <div className="pro">
          <div className="image1">
            <img
              alt="Grocery"
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
            />
            <div class="product">Travel</div>
          </div>
        </div>
        </a>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://res.cloudinary.com/coupondora/image/upload/v1494581876/slider/banner3.jpg"
            alt="First slide"
            height="600"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.mos.cms.futurecdn.net/ZNRKFbDUL7SzCiPr6NxRhb-1200-80.jpeg"
            alt="Second slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hindustantimes.com/tech/img/2022/09/27/1600x900/carouseljpgslidesho_1664266039934_1664266040181_1664266040181.jpg"
            alt="Third slide"
            height="600"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fb8%2F5e%2Fd7%2Fb85ed76228c62636d5bc47203465c872.jpg&f=1&nofb=1&ipt=da457bbfd3304e1440b9513a92153baf22cb9514743ced650530cabbac120e74&ipo=images"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F71%2Fe2%2F81%2F71e281009d2d64c1b6a91af6db8bccd4.jpg&f=1&nofb=1&ipt=7b9f99829a93d9ad48d187d199f2b16018a958c551a0d356a71a878db10ad689&ipo=images"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6tmFS14K1Q4dlUam0AFAngAAAA%26pid%3DApi&f=1&ipt=cc68ed7a0fb9f8477a5e74c94ac606ae0ffbe9d400714e196348d662dee1f59b&ipo=images"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Flipcart;
