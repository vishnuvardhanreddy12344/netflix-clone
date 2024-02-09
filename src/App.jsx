import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";


export default function App(){

 return(

  <BrowserRouter>
  <Navbar/>
    <Routes>
       <Route path="/" element ={<Home/>} />
       <Route path="/login" element ={<Login/>} />
       <Route path="/signup" element ={<Signup/>} />
       <Route path="/profile" element ={<Profile/>} />
    </Routes>
  </BrowserRouter>

 )


}