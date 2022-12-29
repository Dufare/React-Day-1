import React, { useRef } from "react";
import AllDefects from "./AllDefects";

const AdminLogin = () => {
  const AdminUserName = useRef();
  const AdminPassword = useRef();

  const admingetUserName = localStorage.getItem("AdminUserName");
  const admingetPassword = localStorage.getItem("AdminPassword");

  const handleSubmit = () => {
    if (
      AdminUserName.current.value == "Admin@123" &&
      AdminPassword.current.value == "8103"
    ) {
      localStorage.setItem("AdminUserName", "Admin@123");
      localStorage.setItem("AdminPassword", "8103");
    }
  };
  return (
    <>
      {admingetUserName && admingetPassword ? (
        <AllDefects />
      ) : (
        
        <div className="conatiner mx-auto my-5  w-50 px-3 border rounded">
          <form className="container mx-3 my-3">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                ref={AdminUserName}
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
                ref={AdminPassword}
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

export default AdminLogin;
