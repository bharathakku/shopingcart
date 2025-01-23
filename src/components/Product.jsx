import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

function Product(props){
  console.log(props)
  return(
    <div className="productItem">
   


    <Card >
      <Card.Img variant="top" src= {props.product.Image} className='productImg' />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
        price: {props.product.price}
        </Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
  </div>
  )
}
export default Product