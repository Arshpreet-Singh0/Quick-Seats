import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setUser} from '@redux/authSlice';
import { USER_API_ENDPOINT } from "../../utils/constant";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [input, setInput] = useState({
    email : "",
    password : "",
    role : ""
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input,{
        withCredentials : true,
      })

      if (res?.data?.success) {
        toast.success(res.data.message || "Login successful!");
        dispatch(setUser(res?.data?.user));
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        toast.error(res.data.message || "Login failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred!");
    }
    
  }
  return (
   <div className="mt-10 w-72 lg:w-96">
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" className="bg-inherit border rounded-xl w-full p-2 mb-10"
        id="email" name="email" value={input.email} onChange={handleChange} placeholder="Email"/>
      </div>
      <div>
      <input type="password" className="bg-inherit border rounded-xl w-full p-2 mb-10"
        id="pass" name="password" value={input.password} onChange={handleChange} placeholder="Password"/>
      </div>

      <div className="mb-10">
        <input type="radio" id="user" name="role" value="user" checked={input.role === 'user'}
        onChange={(e) => setInput({ ...input, role: e.target.value })}/>
        <label htmlFor="user" className="ml-3">User</label>

        <input type="radio" id="admin" className="ml-4" name="role" value="admin" checked={input.role === 'admin'}
        onChange={(e) => setInput({ ...input, role: e.target.value })}/>
        <label htmlFor="admin" className="ml-3">Admin</label>

      </div>

      <button className="w-full bg-[#ff7300] p-2 rounded-xl">Login</button>
      </form>
      <ToastContainer position="top-left"/>
   </div>
  )
};

export default Login;
