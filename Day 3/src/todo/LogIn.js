import React,{useState} from 'react';
import practiseCss from "./login.module.css"

const LogIn = () => {
    const [active, setActive] = useState("SignIn");

    const Signup = () => {
  
      setActive("SignUp");
  
      // console.log("dsfsdf");
  
    };
  
    const Signin = () => {
  
      setActive("SignIn");
  
      // console.log("dsfsdf");
  
    };
  
    return (
  
      <div className={`${practiseCss.container}`}>
  
        <div className={`${practiseCss.innerContainer}`}>
  
          <div className={`${practiseCss.user} ${practiseCss.userSignUp} `}>
  
            <div
  
              className={`${practiseCss.signup_image} ${
  
                active === "SignUp" ? practiseCss.active : ""
  
              }`}
  
            >
  
              <img
  
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
  
                alt="Login"
  
              />
  
            </div>
  
            <div
  
              className={`${practiseCss.formBox} ${
  
                active === "SignUp" ? practiseCss.active : ""
  
              }`}
  
            >
  
              <form>
  
                <h2> SIGN UP</h2>
  
                <input
  
                  type="email"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail1"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Enter email"
  
                  name="email"
  
                />
  
                <input
  
                  type="password"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail1"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Enter password"
  
                  name="password"
  
                />
  
                <input
  
                  type="password"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail1"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Confirm password"
  
                  name="confirm-password"
  
                />
  
                <p class={practiseCss.goToSignupBtn}>
  
                  ALREADY HAVE AN ACCOUNT?    
  
                  <span className="ms-2" to="#" onClick={() => Signin()}>
  
                    Sign In.
  
                  </span>
  
                </p>
  
              </form>
  
            </div>
  
          </div>
  
          {/* SignIn */}
  
          <div className={`${practiseCss.user} ${practiseCss.userSignIn} `}>
  
            <div
  
              className={`${practiseCss.formBox} ${
  
                active === "SignIn" ? practiseCss.active : ""
  
              }`}
  
            >
  
              <form>
  
                <h2> SIGN In</h2>
  
                <input
  
                  type="email"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail2"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Enter email"
  
                  name="email"
  
                />
  
                <input
  
                  type="password"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail3"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Enter password"
  
                  name="password"
  
                />
  
                <input
  
                  type="password"
  
                  className={"form-control mt-3 error "}
  
                  id="exampleInputEmail2"
  
                  aria-describedby="emailHelp"
  
                  placeholder="Confirm password"
  
                  name="confirm-password"
  
                />
  
                <p class={practiseCss.goToSignupBtn}>
  
                  DON'T HAVE AN ACCOUNT?
  
                  <span className='ms-1' to="#" onClick={() => Signup()}>
  
                    Sign up.
  
                  </span>
  
                </p>
  
              </form>
  
            </div>
  
            <div
  
              className={`${practiseCss.signin_image} ${
  
                active === "SignIn" ? practiseCss.active : ""
  
              }`}
  
            >
  
              <img
  
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
  
                alt="Login"
  
              />
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  
    );
}

export default LogIn
