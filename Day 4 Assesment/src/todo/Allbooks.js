import React,{ useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Allbooks = () => {
    const [success, setSuccess] = useState(false);
    const [books, setTodos] = useState([]);

  const fetchTodos = async () => {
    const data = await fetch("http://localhost:3000/Books");

    const parsedData = await data.json();

    setTodos(parsedData);
  };

   useEffect(() => {
     fetchTodos();
  }, []);

  {books.map((ooks) => {
  return (
    <div className='container mx-5 my-5 '>



    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title className='mx-5'>{books.Title}</Card.Title>
        <Card.Text>
          {books.Author}
        </Card.Text>
        <Card.Text>
          {books.Genere}
        </Card.Text>
       <div className='container'>
        <h3>{success && <p1>Hello React !</p1>}</h3>
       </div>
       <Button onClick={() => setSuccess(true)} variant="success">
        Summary
      </Button>{" "}
      </Card.Body>
    </Card>


      
    </div>
  )

})}
}

export default Allbooks
