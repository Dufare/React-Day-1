import React, { useReducer, useRef } from "react";
import { Navigate } from "react-router-dom";
import AddDefects from "./AddDefects";
import AllDefects from "./AllDefects";

const LogIn = () => {
  const UserName = useRef();
  const Password = useRef();
  const AdminUserName = useRef();
  const AdminPassword = useRef();

  const getUserName = localStorage.getItem("UserName");
  const getPassword = localStorage.getItem("Password");
  const admingetUserName = localStorage.getItem("AdminUserName");
  const admingetPassword = localStorage.getItem("AdminPassword");

  const handleSubmit = () => {
    if (
      UserName.current.value == "Test@123" &&
      Password.current.value == "81033"
    ) {
      localStorage.setItem("UserName", "Test@123");
      localStorage.setItem("Password", "81033");
    }

    else if(
        AdminUserName.current.value == "Admin@123" &&
        AdminPassword.current.value == "8103"
    )
    {
      localStorage.setItem("AdminUserName", "Admin@123");
      localStorage.setItem("AdminPassword", "8103");
    }
  };

  return (
    <>
   
      {getUserName && getPassword ? (
        <AddDefects />
      ):
      admingetUserName && admingetPassword ? (
        <AllDefects />
      ):  


      (
        <div className="conatiner mx-auto my-5  w-50 px-3 border rounded">
          <form className="container mx-3 my-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                ref={UserName}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                ref={Password}
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Password
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => handleSubmit()}
            >
              LogIn
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default LogIn;
