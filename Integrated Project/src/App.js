import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./todo/navbar";
import Home from "./todo/home";
import Cards from "./todo/Cards";
import Authenticationservice from "./Service/Authenticationservice";
import Todos from "./todo/Todos";
import UpdateTodos from "./todo/UpdateTodos";
import Reducer from "./todo/Reducer";
import TaskReducer from "./todo/TaskReducer";
import DisplayAllBooks from "./todo/DisplayAllBooks";
import AddNewBook from "./todo/AddNewBook";
import AddDefects from "./todo/AddDefects";
import AllDefects from "./todo/AllDefects";
import LogIn from "./todo/LogIn";
function App() {
 
  return (
    <>
    
   
      
      <Routes>
      <Route path="/" element={<LogIn />}/>
      <Route path="/login" element={<LogIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/card" element={<Cards />}/>
        <Route path="/Todos" element={<Todos/>}/> 
        <Route path="/UpdateTodos" element={<UpdateTodos/>}/>
        <Route path="/Reducer" element={<Reducer/>}/>
        <Route path="/TaskReducer" element={<TaskReducer/>}/>
        <Route path="/DisplayAllBooks" element={<DisplayAllBooks/>}/>
        <Route path="/AddNewBook" element={<AddNewBook/>}/>
        <Route path="/AddDefects" element={<AddDefects/>}/>
        <Route path="/AllDefects" element={<AllDefects/>}/>
        

        
      </Routes>
    </>
  );
}

export default App;
