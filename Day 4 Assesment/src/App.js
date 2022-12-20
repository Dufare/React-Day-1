import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./todo/navbar";
import Home from "./todo/home";
import LogIn from "./todo/LogIn";
import Cards from "./todo/Cards";
import Loginform from "./todo/loginform";
import Authenticationservice from "./Service/Authenticationservice";
import Todos from "./todo/Todos";
import AddBook from "./todo/AddBook";
import Allbooks from "./todo/Allbooks";

function App() {
 
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/AllBooks" element={<Allbooks/>} />
      </Routes>
    </>
  );
}

export default App;
