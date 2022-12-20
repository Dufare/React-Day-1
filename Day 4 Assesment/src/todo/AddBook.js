import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddBook = () => {
  const [Book, setBook] = useState({
    title:"",
    author:"",
    genre:"",
  }); 
  const handleChange = (e) => {
    setBook({...Book,[e.target.name]:e.target.value})
  }
  const addbookhandle =async(e)=>{
    e.preventDefault()
    console.log(Book)
    const data = await fetch("http://localhost:3000/Books",{ method:"POST",
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 
      JSON.stringify({
        Title:Book.title,
        Author: Book.title,
        Genere: Book.title,
  })});
    console.log(data.json())
  }
  return (
    <div className='container mx-5 my-5'>
          <Form onSubmit={(e)=>addbookhandle(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title :</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" name="title" value={Book.title} onChange={(e)=>handleChange(e)} />
        <Form.Text className="text-muted" >
          Enter title of the boook
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="Author" value={Book.author} name="author" onChange={(e)=>handleChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Genre:</Form.Label>
        <Form.Control type="text" placeholder="Genre" value={Book.genre} name="genre" onChange={(e)=>handleChange(e)}/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Add Book
      </Button>
    </Form>
    </div>
  )
}

export default AddBook
