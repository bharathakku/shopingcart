import { useState } from "react"
import "./css/App.css"
import Product from "./components/Product"
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [products, setProducts] = useState([
    {
      title: "Camera",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/f/u/-original-imah2h4mkhhyzgdx.jpeg?q=70",
      price: 1500
    },
    {
      title: "Airdopes",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/k/n/-original-imah4fhupx4s3nxw.jpeg?q=70",
      price: 3000
    },
    {
      title: "Headphone",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/f/y/f/-original-imahy3uqgtzmdsge.jpeg?q=70",
      price: 3300
    },
    {
      title: "boat",
      Image: "https://rukminim2.flixcart.com/image/612/612/ksw4ccw0/headphone/w/g/r/rockerz-450-boat-original-imag6cqqh49wjfy5.jpeg?q=70",
      price: 4000
    },
    {
      title: "Headphone",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/k/v/-original-imah3am86gzrvr6g.jpeg?q=70",
      price: 2300
    }
    ,
    {
      title: "Realme Headphone",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/6/9/j/-original-imah388mvfzxm2u8.jpeg?q=70",
      price: 2100
    }
    ,
    {
      title: "Headphone",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/y/z/-original-imah8bfrgyny3xuh.jpeg?q=70",
      price: 1800
    }
    ,
    {
      title: "Airpods",
      Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/g/s/-original-imahfqxuzd987pvu.jpeg?q=70",
      price: 2600
    }
    
  ])

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="navvv">
          <Navbar.Brand href="#">Shoping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Camera</Nav.Link>
              <NavDropdown title="Headphones" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Realme</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Airdopes
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>Product</h1>
      <Container>
        <Row>
          {products.map((product, index) => {
            return (
              <Col xs ={6} sm={6} md={4}  lg={4} lx={3} xxl={3}>
               <Product product={product} />
              </Col>
             
            )
          })}



        </Row>
      </Container>



    </>
  )
}

export default App
