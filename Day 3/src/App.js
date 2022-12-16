import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './todo/navbar';
import Home from './todo/home';
import LogIn from './todo/LogIn';
import Cards from './todo/Cards';

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<LogIn/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/card" element={<Cards/>}/>
  </Routes>
  </>
  );
}

export default App;
