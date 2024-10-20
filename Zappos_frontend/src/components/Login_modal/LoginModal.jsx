import React from "react";
import cross from "../../assets/cross.svg";

function LoginModal({ isOpen, onClose }) {
  isOpen = true;

  return (
    <div className=" fixed  inset-0 bg-opacity-50 m-auto flex justify-center items-center">
      {isOpen && (
        <div className=" w-2/4 h-auto shadow-lg bg-white  border rounded-2xl">
          <div className="flex justify-between   border-b-2 border-gray-400">
            <h1 className="font-bold text-2xl mb-6 m-3">Sign-In</h1>
            <button>
              <img className="h-12 mb-6 m-3" src={cross} alt="" />
            </button>
          </div>
          <div className="flex p-5">
            <div className="flex flex-col w-72 justify-center gap-4 items-start p-6 border-r-2 text-[15px] ">
              <button className=" flex items center justify-center shadow-lg bg-white p-2 border w-56">
                <img
                  className="m-auto h-5"
                  src="https://imgs.search.brave.com/BxqQk5nsRmwp6shDYUv1E5rQl70_q5kjsoVHTsK51Vg/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMzJlYmRjZDg3/NTRhMWNiM2JjM2Jk/MmRjMTJmMmMwMWQz/MWUxMDA5OWEzZjg5/YmJjYmUwNWQ5YjI1/OTk0MWQ5ZC93d3cu/emFwcG9zLmNvbS8"
                  alt=""
                />{" "}
                Sign in with Zappos
              </button>
              <button className=" flex justify-center items-center shadow-lg bg-white p-2 border w-56">
                <img
                  className=" m-auto mt-2 h-5"
                  src="https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png"
                  alt=""
                />
                Sign in with Amazon
              </button>
              <button className=" flex  justify-center items-center shadow-lg bg-white p-2 border w-56">
                <img
                  className="h-6 ml-7 border m-auto"
                  src="https://imgs.search.brave.com/1FxIjE2zu04outIWTb9IZXBbAjj8zI7UUDpkNms1eOc/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTA2M2Y3YWZj/M2M0MTJkZGVmMDkw/ZTllOThkMjU2Mzdm/MDYzOGY5MGQ3NDcz/MmFiM2ZiYmY5YzZk/YmI5NTM1OC9tYWls/Lmdvb2dsZS5jb20v"
                  alt=""
                />
                <p className="mr-7"> Sign with google</p>
              </button>
              <div className="flex items-center justify-center  gap-5 ">
                <p className="w-20 border"></p>
                <p>OR</p>
                <p className="w-20 border"></p>
              </div>
              <button className="shadow-lg bg-white p-2 border w-56">
                Create your Zappos account
              </button>
            </div>
            <div className="p-3 flex flex-col gap-2 ">
              <h1 className="font-bold text-xl">
                By logging in with Amazon, you may be eligible for additional
                Prime benefits like FREE Upgraded Shipping. Then, join Zappos
                VIP for additional Prime-linked VIP perks:
              </h1>

              <ul className="mt-4 space-y-3 pl-6 list-disc">
                <li>If you are an Amazon Prime Member, sign in with Amazon to qualify for free upgraded shipping!</li>
                <li>Earn 2 Points for Every $1 Spent</li>
                <li>Receive Bonus Points on Select Brands</li>
                <li>Redeem Points for VIP Codes</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
