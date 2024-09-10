import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "../../utils/constant";
import {setUser} from '@redux/authSlice';
import axios from 'axios'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${USER_API_ENDPOINT}/logout`, 
        {},
        {
          withCredentials: true,
        }
      );
      
      if (res?.data?.success) {
        dispatch(setUser(null));
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <SideNavBar user={user}/>
    <div className={`${user ? 'p-5' : 'p-6'} border-b text-md hidden md:flex items-center justify-between shadow-md sticky top-0 bg-[#01041c] z-10`}>
      <div>
        <h1 className="text-3xl font-bold sm:ml-5 lg:ml-14 ">
          <Link to={'/'}>
          <span className="text-[#FAF6F0]">Quick</span>{" "}
          <span className="text-[#ff7300]">Seats</span>
          </Link>
        </h1>
      </div>

      {/* <div className="hidden lg:block">
        <input type="text" className="w-80 p-1 rounded-sm placeholder:text-center" placeholder="Search Movie, Event etc."/>
        <button className="bg-[#ff7300] p-1 px-2 rounded-sm ml-5">Search</button>
      </div> */}

      <div className="lg:mr-8">
        <ul className="hidden md:flex items-center justify-center gap-10 text-[#fff]">
          {user ? (
            <>
              <li className="cursor-pointer"><Link to={'/'}>Home</Link></li>
              <li className="cursor-pointer"><Link to={'/allmovies'}>All movies</Link></li>
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
                        <li className="block px-4 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
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
              <li className="cursor-pointer"><Link to={'/'}>Home</Link></li>
              <li className="cursor-pointer"><Link to={'/allmovies'}>All movies</Link></li>
              <li className="cursor-pointer"><Link to={'/login'}>Login / Signup</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
