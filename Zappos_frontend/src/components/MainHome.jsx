import React, { useContext } from "react";
import Navbar from "./Navbar_&_Footer/Navbar";
import Home from "./Home.jsx/Home";
import { Outlet } from "react-router-dom";
import LoginModal from "./Login_modal/LoginModal";
import { ModalContext } from "../contexts/ModalContext";

function MainHome() {
  const {ModalOpen}= useContext(ModalContext)
  return (
   <>
   <Navbar/>
   this is main home
  {ModalOpen && <LoginModal/>}
   <Outlet/>
   </>
  );
}

export default MainHome;
