import React, { useContext } from "react";
import Navbar from "./Navbar_&_Footer/Navbar";
import Home from "./Home.jsx/Home";
import { Outlet } from "react-router-dom";
import LoginModal from "./Login_modal/LoginModal";
import { ModalContext } from "../contexts/ModalContext";

import NewModal from "./MenuModals/NewModal";
import { NewModalContext } from "../contexts/newModalContext";
import WomenModal from "./MenuModals/WomenModal";
import KidsModal from "./MenuModals/KidsModal";
import MenModal from "./MenuModals/MenModal";
import BrandModal from "./MenuModals/BrandModal";
import CollectionModal from "./MenuModals/Collectionmodal";
import SaleModal from "./MenuModals/SaleModal";
import GiftsModal from "./MenuModals/GiftsModal";

function MainHome() {
  const { ModalOpen } = useContext(ModalContext);
  const { newModalopen } = useContext(NewModalContext);
  console.log(newModalopen)
  
  return (
    <>
      <Navbar />
     
      {newModalopen=="New" && <NewModal />}
      {newModalopen=="women" && <WomenModal/>}
      {newModalopen=="kids" && <KidsModal/>}
      {newModalopen=="men" && <MenModal/>}
      {newModalopen=="Brands" && <BrandModal/>}
      {newModalopen=="collections" && <CollectionModal/>}
      {newModalopen=="sale" && <SaleModal/>}
      {newModalopen=="gifts" && <GiftsModal/>}
      {ModalOpen && <LoginModal />}
      this is 
      
      <Outlet />
    </>
  );
}

export default MainHome;
