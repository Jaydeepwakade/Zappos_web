import React, { createContext, useContext } from "react";
import { NewModalContext } from "../../contexts/newModalContext";


function NewModal() {
  const {newModalopen , setnewModalopen}= useContext(NewModalContext)
  return (
    <div className="animate-slideDown w-96 fixed inset-0 bg-opacity-50 m-auto border border-black p-4 h-40 flex justify-center items-center z-50">
      <div className=" w-full flex  justify-between">
        <h1>hello this new page</h1>
        <button onClick={()=> setnewModalopen(!newModalopen)}>close</button>
      </div>
    </div>
  );
}

export default NewModal;
