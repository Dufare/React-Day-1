import React, { useState } from "react";
import { Container } from "reactstrap";


const AddNewBook = () => {
    const [Title,setTitle]=useState("");
    const [Author,setAuthor]=useState("");
    const [Genere,setGenere]=useState("");
    function saveBook(){
       // console.log(Title,Author,Genere);
        let data = {Title,Author,Genere}
        fetch("http://localhost:5000/Books",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'

            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })
        
    }
    
  return (
    <>
    
      <div className="container w-25 p-3mx-5 my-5 border rounded">
      <h4 className="mx-3 my-3"> ADD NEW BOOK</h4>
        <form className="container mx-3 my-3 ">
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label">
              Title :
            </label>
            <input
              type="text"
              value= {Title}
              onChange={(e)=>{setTitle(e.target.value)}}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Author :
            </label>
            <input
              type="text"
              value= {Author}
              onChange={(e)=>{setAuthor(e.target.value)}}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Genere :
            </label>
            <input
              type="text"
              value= {Genere}
              onChange={(e)=>{setGenere(e.target.value)}}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          
          <button type="submit" className="btn btn-primary"  to= "/DisplayAllBooks" onClick={saveBook}>
            ADD Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewBook;
