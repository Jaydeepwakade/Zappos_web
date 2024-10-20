import { useState } from "react";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar_&_Footer/Navbar";
import Home from "./components/Home.jsx/Home";
import MainHome from "./components/MainHome";
import LoginModal from "./components/Login_modal/LoginModal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div className="mr-28 ml-28 mt-10 ">
      <div className="">
        <Navbar />
        <LoginModal/>
        <Home/>
      </div>
    </div>
     
      <Routes>
      
      </Routes>
    </>
  );
}

export default App;
