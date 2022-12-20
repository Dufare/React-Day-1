import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      {
        title: "Angels and Demons",
        publisher: "Penguin Random House",
        author: "Dan Brown",
        price: 409,
        prodId: 2012,
      },
      {
        title: "Angels",
        publisher: "Penguin Random House",
        author: "Dan Brown",
        price: 409,
        prodId: 2012,
      },
      
    ]);
  }, []);
  return (
    <>

<div className="d-flex mt-5 mx-4">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Publisher</th>
          <th>Author</th>
          <th>Price</th>
          <th>ProdID</th>
        </tr>
      </thead>
      {products.map(product=>( <tbody>
        <tr>
          <td>{product.title}</td>
          <td>{product.publisher}</td>
          <td>{product.author}</td>
          <td>{product.price}</td>
          <td>{product.prodId}</td>
        </tr>
      </tbody>))} 
        </Table> 
    </div>
    <div className="d-flex">
    {products.map(product=>(<Card className={'mx-4'} style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <p>Author:{product.author}</p>
          <p>Publisher:{product.publisher}</p>
          <p>Price:{product.price}</p>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>))}  
    </div>
   
    </>
  )
}

export default Cards
