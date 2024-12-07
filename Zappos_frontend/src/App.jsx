import { useState } from "react";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar_&_Footer/Navbar";
import Home from "./components/Home.jsx/Home";
import MainHome from "./components/MainHome";
import LoginModal from "./components/Login_modal/LoginModal";
import Pagenotfound from "./components/pagenofound/Pagenotfound";

function App() {
  return (
   <div className="m-4">
 <Routes >
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="/" element={<MainHome/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    
   </div>
     
  );
}

export default App;
