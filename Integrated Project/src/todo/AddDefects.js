import { data } from "jquery";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import AllDefects from "./AllDefects";
import Navbar from "./navbar";

const AddDefects = () => {
    
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [Priority, setPriority] = useState("");
  const [Status, setStatus] = useState("Open");
  const [success, setSuccess] = useState(false);
  const [addDefect, setDefect] = useState(false);
  const [viewDefect, setViewDefect] = useState(false);
  const [defects, setDefects] = useState([]);
  const options = [
      {value:null,label:"Select"},
    { value: 'user Interface', label: 'User Interface' },
    { value: 'function', label: 'Function' },
    { value: 'change Request', label: 'Change Request' },
  ];

  function saveDefect() {
    // POST EFFECT
    let data = { Category:Category.label, Description, Priority,Status };
    fetch("http://localhost:5000/Defects", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        setCategory({...Category,label:"select",value:null});
        setDescription("");
        setPriority("")
      });
    });
  }
 

  // GET ALL DEFECTS
  const fetchDefects = async () => {
    const data = await fetch("http://localhost:5000/Defects");
    const parsedData = await data.json();
    console.log(parsedData);
    setDefects(parsedData);
  };

  useEffect(() => {
    fetchDefects();
  }, []);

//   delete defect

  const deleteDefect = async(id) => {
   
    fetch(`http://localhost:5000/Defects/${id}`,{
        method :'DELETE'
    }).then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp)
        })
    })
   
    fetchDefects();
  };

  return (
    <>
    <Navbar />
      <div className="container my-3">
        {success && (
          <div class="alert alert-success" role="alert">
            <strong> Defect Added Succesfully...!</strong>
          </div>
        )}
      </div>

      {/* Buttons to add and view */}

      <div className="conatiner d-flex justify-content-center mx-5  border rounded  ">
        <button
          type="button"
          class="btn btn-primary my-3 mx-3"
          onClick={() => {
            setDefect(true);
            setViewDefect(false);
          }}
        >
          ADD DEFECT
        </button>
        <button
          type="button"
          class="btn btn-secondary mx-3 my-3"
          onClick={() => {
            setDefect(false);
            setViewDefect(true);
            setSuccess(false);
          }}
        >
          VIEW DEFECTS
        </button>
      </div>

      {addDefect && (
        <div>
          <div className="container w-50 p-3 my-5  border rounded addfect_form">
            <form action="">
              <div id="wizard ">
                <h4></h4>
                <section>
                  <div class="dropdown form-row mx-3 my-3 ">
                    <Select
                    //   class="btn btn-lightk border border-dark rounded dropdown-toggle w-75 p-1"
                    //   type="button"
                    //   value={Category}
                    //   id="dropdownMenuButton"
                    //   onChange={e=>{console.log(e);setCategory(e.target.value)}}
                     
                    //   data-toggle="dropdown"
                    //   aria-haspopup="true"
                    //   aria-expanded="false"
                    defaultValue={Category}
        onChange={setCategory}
        options={options}
                    />
                      {/* Select Defect Category
                    </Select> */}
                    <div
                      class="dropdown-menu  w-75 p-3"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        class="dropdown-item"
                        id="dropdownMenuButton"
                        value= {"User Interface"}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        href="#"
                      >
                        User Interface
                      </a>
                      <a
                        class="dropdown-item"
                        id="dropdownMenuButton"
                        value= {"Function"}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        href="#"
                      >
                        Function
                      </a>
                      <a
                        class="dropdown-item"
                        id="dropdownMenuButton"
                        value= {"Change Request"}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        href="#"
                      >
                        Chnage Request
                      </a>
                    </div>
                  </div>

                  <div className="form-row mx-3 my-3">
                    <input
                      type="text"
                      value={Description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      className="form-control"
                      placeholder="Description"
                    />
                  </div>
                  <div className="form-row mx-3 my-3">
                    <input
                      type="text"
                      value={Priority}
                      onChange={(e) => {
                        setPriority(e.target.value);
                      }}
                      className="form-control"
                      placeholder="Priotity"
                    />
                  </div>

                  <div className="form-row mx-3 my-3">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={() => {
                        saveDefect();
                        setSuccess(true);
                      }}
                    >
                      ADD DEFECT
                    </button>
                  </div>
                </section>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewDefect && (
        <div className="container w-75 p-3 my-5  border rounded">
          <table className="table table-striped table-light ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {defects.map((defect) => {
                return (
                  <tr>
                    <th scope="row">{defect.id}</th>
                    <td>{defect.Category}</td>
                    <td>{defect.Priority}</td>
                    <td>{defect.Description}</td>
                    <td>Open</td>
                    <td><button className="border border-dark rounded"><ion-icon onClick={()=>deleteDefect(defect.id)} name="trash-outline"></ion-icon></button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AddDefects;
