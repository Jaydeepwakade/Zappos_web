import React, { createContext, useContext } from "react";
import { NewModalContext } from "../../contexts/newModalContext";
import { NavLink } from "react-router-dom";

function BrandModal() {
  const { newModalopen, setnewModalopen } = useContext(NewModalContext);
  return (
    <div className="animate-slideDown w-3/4 ml-4 fixed inset-0  m-34 mt-[8rem] bg-white shadow-stone-500 rounded-2xl border p-2 h-[35rem] flex justify-center z-50">
      <div className="  h-auto gap-7 flex justify-between ">
        <div className="flex flex-col gap-2 ">
          <h3 className=" font-bold text-lg  pb-2">Brands by category</h3>
          <div className="flex flex-col gap-3 font-semibold mt-3">
            <NavLink>Shoes</NavLink>
            <NavLink>Clothing</NavLink>
            <NavLink>Bags</NavLink>
            <NavLink>Accessories</NavLink>
            <NavLink>Shop All New</NavLink>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className=" font-bold text-lg pb-2">The Style Room</h3>
          <div className="flex flex-col gap-3 font-semibold mt-3">
            <NavLink>Hunter</NavLink>
            <NavLink>Fotwear Edit</NavLink>
            <NavLink>Pretty Extravaganza</NavLink>
            <NavLink>Steve Madden</NavLink>
            <NavLink>Converse</NavLink>
            <NavLink>Winter Shopping Guide</NavLink>
            <NavLink>MICHAEL Michael Kors</NavLink>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className=" font-bold text-lg">New Brands</h3>
          <div className="flex flex-col  gap-3 font-semibold mt-3">
            <NavLink>Allbirds</NavLink>
            <NavLink>Free Fly</NavLink>
            <NavLink>BIrdies</NavLink>
            <NavLink>Converse</NavLink>
          </div>
        </div>
        <div className="flex flex-col">
          {" "}
          <h3 className=" font-bold text-lg">New & Now</h3>
          <div className="flex flex-col gap-3 font-semibold mt-3">
            <NavLink>25th Birthday Exclusives</NavLink>
            <NavLink>New Brooks Glycerin Max</NavLink>
            <NavLink>Cozy Crocs</NavLink>
            <NavLink>Stocking Stuffer Shoes Guide</NavLink>
            <NavLink>Red Hot for Fall</NavLink>
            <NavLink>Holiday Stylist Picks</NavLink>
            <NavLink>Winter Running Shoes</NavLink>
            <NavLink>Our Family Gift Guide</NavLink>
            <NavLink>Top Searched Gifts</NavLink>
            <NavLink>Our Casual Boots Guide</NavLink>
            <NavLink>Our UGG® Gift Guide</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <img
            className="h-50 w-60"
            src="https://m.media-amazon.com/images/G/01/zappos/2024/listicles/LISTICLE-WINTER-RUNNING-GLOBAL-NAV-350x350.jpg"
            alt=""
          />
          <img
            className="h-50 w-60"
            src="https://m.media-amazon.com/images/G/01/zappos/2024/Global-Nav/November/HP-BROOKS-LOOKBOOK-GLOBAL-NAV-350x350.jpg"
            alt=""
          />
        </div>
      </div>
      <button
        className="h-6 m-2 ml-7"
        onClick={() => setnewModalopen(" ")}
      >
        close
      </button>
    </div>
  );
}

export default BrandModal;
