import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import loginform from "./loginform";
const Home = () => {
  //take message from the server
  const [success, setSuccess] = useState(false);
  const [message, setmessage] = useState("");
  const clickhandler = async () => {
    const data = await fetch("http://localhost:3000/messages");

    const pasredData = await data.json();

    var randNum = Math.floor(Math.random() * 4) + 1;

    setmessage(pasredData[randNum].message);
  };


  //---------------print message random with given array 
  
  // const clickhandler = () => {
  //   const welcomeMessages = [
  //     { id: 1, message: "you are doing good" },

  //     {
  //       id: 2,
  //       message: "stand in front of the mirror to see your best friend",
  //     },

  //     { id: 3, message: "today I leave beind all the past traumas" },

  //     { id: 4, message: "I am in the best of my energy today" },

  //     { id: 5, message: "I greet people with care and affection" },
  //   ];

  //   var randNum = Math.floor(Math.random() * 4) + 1;

  //   setmessage(welcomeMessages[randNum].message);

return (
  <>
    <div className="conatiner mx-5 my-5">
      <h3>{message}</h3>
      <button className="btn btn-primary" onClick={clickhandler}>
        click
      </button>
    </div>

    <div className="conatiner mx-5 my-5">
      <Button onClick={() => setSuccess(true)} variant="success">
        Success
      </Button>{" "}
      <Button onClick={() => setSuccess(false)} variant="danger">
        Danger
      </Button>{" "}
      {success && <p>Hello React !</p>}
    </div>
  </>
);
}
export default Home;
