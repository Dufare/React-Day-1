import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [success, setSuccess] = useState(false);
 
  const fetchBooks = async () => {
    const data = await fetch("http://localhost:5000/Books");
    const parsedData = await data.json();
    console.log(parsedData);
    setBooks(parsedData);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    
    <div className="container mx-y mx-5 row">
       <Link to="/AddNewBook">
     <button className="btn btn-success" type="button">
          ADD NEW BOOK
     </button>
 </Link>
      
      {books.map((book) => {
        return (
          <div className="card w-25 p-3 mx-3 my-3" >
            <div className="card-header text-success">Title :<b> {book.Title}</b> </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Author :{book.Author} </li>
              <li className="list-group-item">Genere : {book.Genere}</li>
              {success &&<li className="list-group-item"><b>Summary : </b> Hello this is the summary !</li>}
              <li className="list-group-item"><button type="button" class="btn btn-success" onClick={() => setSuccess(true)}>View Summary</button></li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAllBooks;
