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
      Image: "/shopingcart/img/eos-r10-24-2-r10-canon-original-imagg42fsbgv79da.webp ",
      price: 1500
    },
    {
      title: "Airdopes",
      Image: "/shopingcart/img/-original-imah3dwf6xjtzk7d.webp",
      price: 3000
    },
    {
      title: "Headphone",
      Image: "/shopingcart/img/-original-imah4fhupx4s3nxw.webp",
      price: 3300
    },
    {
      title: "boat",
      Image: "/shopingcart/img/rockerz-450-boat-original-imag6cqqh49wjfy5.webp",
      price: 4000
    },
    {
      title: "Headphone",
      Image: "/shopingcart/img/-original-imah388mvfzxm2u8.webp",
      price: 2300
    }
    ,
    {
      title: "Realme Headphone",
      Image: "/shopingcart/img/-original-imahf4qppx6fkxtw.webp",
      price: 2100
    }
    ,
    {
      title: "Headphone",
      Image: "/shopingcart/img/-original-imahy3uqgtzmdsge.webp",
      price: 1800
    }
    ,
    {
      title: "Airpods",
      Image: " /shopingcart/img/-original-imagz5z4cknamu9d.webp",
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
