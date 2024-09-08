import React, { useState } from "react";
import SideNavBar from "./SideNavBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideNavBar user={user}/>
    <div className={`${user ? 'p-5' : 'p-6'} border-b text-md hidden md:flex items-center justify-between shadow-md sticky top-0 bg-[#01041c] z-10`}>
      <div>
        <h1 className="text-3xl font-bold sm:ml-5 lg:ml-14 ">
          <span className="text-[#FAF6F0]">Quick</span>{" "}
          <span className="text-[#ff7300]">Seats</span>
        </h1>
      </div>

      <div className="lg:mr-8">
        <ul className="hidden md:flex items-center justify-center gap-10 text-[#fff]">
          {user ? (
            <>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Events</li>
              <li className="cursor-pointer">My Bookings</li>
              <li className="cursor-pointer">Support</li>
              <div className="w-12 h-12 border rounded-full">
                <img
                  src="/media/avatar.jpeg"
                  className="rounded-full"
                  onClick={toggleDropdown}
                  alt=""
                />

                {isOpen && (
                  <div className="absolute right-4  mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="my-1">
                      <ul>
                        <li className="block px-4 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer">
                          <i className="fa-solid fa-user"></i>&nbsp;&nbsp;My
                          Profile
                        </li>
                        <li className="block px-4 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer">
                          <i className="fa-solid fa-right-from-bracket"></i>
                          &nbsp;&nbsp;Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div></div>
            </>
          ) : (
            <>
              <li className="cursor-pointer">Manage Bookings</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Login / Signup</li>
            </>
          )}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
