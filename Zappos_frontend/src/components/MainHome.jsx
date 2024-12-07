import React, { useContext } from "react";
import Navbar from "./Navbar_&_Footer/Navbar";
import Home from "./Home.jsx/Home";
import { Outlet } from "react-router-dom";
import LoginModal from "./Login_modal/LoginModal";
import { ModalContext } from "../contexts/ModalContext";

import NewModal from "./MenuModals/NewModal";
import { NewModalContext } from "../contexts/newModalContext";

function MainHome() {
  const { ModalOpen } = useContext(ModalContext);
  const { newModalopen } = useContext(NewModalContext);
  console.log(newModalopen)
  
  return (
    <>
      <Navbar />
      this is main home
      {newModalopen && <NewModal />}
      {ModalOpen && <LoginModal />}
      
      <Outlet />
    </>
  );
}

export default MainHome;
