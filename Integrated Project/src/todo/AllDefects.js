import React,{useState,useEffect} from 'react'
import Navbar from './navbar';


const AllDefects = () => {
    const [defects, setDefects] = useState([]);
    const [query , setQuery]=useState("");
    const [query2 , setQuery2]=useState("");
    
   
    const fetchDefects = async () => {
      const data = await fetch("http://localhost:5000/Defects");
      const parsedData = await data.json();
      console.log(parsedData);
      setDefects(parsedData);
    };
  
  
    useEffect(() => {
      fetchDefects();
    }, []);

    //console.log(defects.filter(defect=>defect.Category.includes("le")));
  return (
    <>
    <Navbar/>
    <div className='conatiner  d-flex justify-content-center my-2 defect_text' > <h3>Defect Details</h3></div>
    <div className='container w-75 p-3 my-3 d-flex justify-content-center'> 
    <div className='conatiner mx-3'>
    <input type="text" placeholder='Filter By Priority' className='form-control' onChange={(e)=> setQuery(e.target.value)}/>
    </div>
    <div className='conatiner mx-3 '>
    <input type="text" placeholder='Filter By Category' className='form-control'onChange={(e)=> setQuery2(e.target.value)}/>
    </div>
    </div>
    
    <div className="container w-75 p-3 my-5  border rounded">
        <table className="table table-striped table-light ">
  <thead className="thead-dark">
    <tr>
      
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Priority</th>
      <th scope="col">Status</th>
      <th scope="col">Chnage Status</th>
    </tr>
  </thead>
  <tbody>
  {defects.filter(defect=>query?defect.Priority.toLowerCase().includes(query):defect.Category.toLowerCase().includes(query2)).map((defect) => {
              return (
    <tr>
      
      <td key={defect.Category}>{defect.Category}</td>
      <td>{defect.Description}</td>
      <td key={defect.Priority}>{defect.Priority}</td>
      
      <td>Open</td>
      <td>Closed Defect</td>
    </tr>
              )})}
   
  </tbody>
</table >

        
      
    </div>
    </>
  )
}

export default AllDefects
