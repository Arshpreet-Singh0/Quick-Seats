import React, { useState } from "react";

const SideNavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" md:hidden sticky top-0 bg-[#01041c] z-10">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 shadow-md text-white">
        <button onClick={toggleSidebar} className="p-2 text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>

        <h1 className="text-3xl font-bold ml-auto">
          <span className="text-[#FAF6F0]">Quick</span>{" "}
          <span className="text-[#ff7300]">Seats</span>
        </h1>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 text-white bg-[#01041c] transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 bg-[#01041c] text-gray-100 border-b ">
          <h2 className="text-xl font-bold ml-2">Menu</h2>
          <button onClick={toggleSidebar} className="text-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <ul className="space-y-4 p-4 ">
          {user ? (
            <>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer ">
                Home
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                My Profile
              </li>
            
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                Events
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                My Bookings
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                Support
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                Logout
              </li>
            </>
          ) : (
            <>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                Manage Bookings
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                About
              </li>
              <li className="hover:bg-gray-300 p-2 rounded cursor-pointer">
                Login / Signup
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
