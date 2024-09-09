import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setUser} from '@redux/authSlice';
import { USER_API_ENDPOINT } from "../../utils/constant";

const Login = () => {
  const [input, setInput] = useState({
    email : "",
    password : "",
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
    console.log(input);

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input,{
        withCredentials : true,
      })

      if(res?.data?.success){
        console.log(res?.data?.user);
        
        dispatch(setUser(res?.data?.user));
        navigate('/');
      }
      
    } catch (error) {
      console.log(error);
      
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

      <button className="w-full bg-[#ff7300] p-2 rounded-xl">Login</button>
      </form>
   </div>
  )
};

export default Login;
