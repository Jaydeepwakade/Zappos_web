import React, { useContext, useState } from "react";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import cart from "../../assets/cart.svg";
import { ModalContext } from "../../contexts/ModalContext";
import { NewModalContext } from "../../contexts/newModalContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { ModalOpen, setModalOpen } = useContext(ModalContext);
  const { newModalopen, setnewModalopen } = useContext(NewModalContext);
  const [navActive, setnavActive] = useState("");

  const handleLoginModal = () => {
    console.log(ModalOpen);
    setModalOpen(!ModalOpen);

    console.log("hello", ModalOpen);
  };
  const handlenewButton = () => {
    console.log(newModalopen);
    setnewModalopen("New");
    setnavActive("new");
    console.log(!newModalopen);
  };

  return (
    <div>
      <div className=" flex justify-between  mt-2 mb-3">
        <div className="flex gap-10 w-[80%]">
          <img
            src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg"
            alt=""
          />
          <div className=" flex justify-end border border-black w-[60%] rounded-3xl h-11">
            <img className="h-8  mt-auto mb-auto ml-1 " src={search} alt="" />
            <input
              className="border-r border-black w-[70%] outline-none rounded-l-3xl h-10 text-1xl p-1"
              placeholder="Search for shoes, clothes,etc"
              type="text"
            />
            <button className="w-20 m-auto font-semibold">search</button>
          </div>
        </div>
        <div className="flex gap-6 ">
          <img
            onClick={handleLoginModal}
            className="h-8 m-auto"
            src={profile}
            alt="img"
          />
          <img
            className="h-8 m-auto"
            onClick={() => {
              alert("hello i am bag");
            }}
            src={cart}
            alt="img2"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex list-none gap-7 w-20  font-bold">
          <li
            onClick={handlenewButton}
            className={
              navActive === "new"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            new
          </li>
          <li
            onClick={() => {
              setnavActive("women");
              setnewModalopen("women");
            }}
            className={
              navActive === "women"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            women
          </li>

          <li
            onClick={() => {
              setnavActive("men");
              setnewModalopen("men")
            }}
            className={
              navActive === "men"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            Men
          </li>
          <li
            onClick={() => {setnavActive("kids")
              setnewModalopen("kids")
            }}
            className={
              navActive === "kids"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            Kids
          </li>
          <li
            onClick={() => {setnavActive("collections")
              setnewModalopen("collections")
            }}
            className={
              navActive === "collections"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            Collections
          </li>
          <li
            onClick={() => {setnavActive("Brands")
              setnewModalopen("Brands")
            }}
            className={
              navActive === "Brands"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            Brands
          </li>
          <li
            onClick={() => {setnavActive("sale")
              setnewModalopen("sale")
            }}
            className={
              navActive === "sale"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            {" "}
            sale
          </li>
          <li
            onClick={() => {setnavActive("gifts")
              setnewModalopen("gifts")
            }}
            className={
              navActive === "gifts"
                ? "bg-black rounded rounded-lg p-2 text-white"
                : ""
            }
          >
            Gifts
          </li>
        </div>
        <div className=" font-bold">
          <h1>Help & Support</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
