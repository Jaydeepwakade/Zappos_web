import React from "react";
import search from "../../assets/search.svg"
import profile from "../../assets/profile.svg"
import cart from "../../assets/cart.svg"
function Navbar() {
  return (
    <div>
      <div className=" flex justify-between mt-2 mb-3">
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
          <img className="h-8 m-auto" src={profile} alt="img" />
          <img className="h-8 m-auto" src={cart} alt="img2" />
        </div>
      </div>
      <div className="flex justify-between">
     <div className="flex list-none gap-7 font-bold">
     <li>New</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Collections</li>
        <li>Brands</li>
        <li> sale</li>
        <li>Gifts</li>
     </div>
     <div className=" font-bold">
        <h1>Help & Support</h1>
     </div>
      </div>
    </div>
  );
}

export default Navbar;
