import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from "../../utils/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    role : ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/signup`, input, {
        withCredentials: true,
      });

      if (res?.data?.success) {
        toast.success(res.data.message || "Signup successful!");
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        toast.error(res.data.message || "Signup failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred!");
    }
  };

  return (
    <div className="mt-10 w-72 md:w-96">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="bg-inherit border rounded-xl w-full p-2 mb-10"
            id="name"
            name="username"
            value={input.username}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-inherit border rounded-xl w-full p-2 mb-10"
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            className="bg-inherit border rounded-xl w-full p-2 mb-10"
            id="pass"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="mb-10">
        <input type="radio" id="user" name="role" value="user" checked={input.role === 'user'}
        onChange={(e) => setInput({ ...input, role: e.target.value })}/>
        <label htmlFor="user" className="ml-3">User</label>

        <input type="radio" id="admin" className="ml-4" name="role" value="admin" checked={input.role === 'admin'}
        onChange={(e) => setInput({ ...input, role: e.target.value })}/>
        <label htmlFor="admin" className="ml-3">Admin</label>

      </div>
        <button className="w-full bg-[#ff7300] p-2 rounded-xl">Register</button>
      </form>
      <ToastContainer 
  position="top-left"
/>

    </div>
  );
};

export default Signup;
