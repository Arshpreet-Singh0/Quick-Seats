import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import axios from 'axios';
import { THEATER_API_ENDPOINT } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CreateTheater = () => {
    const [input, setInput] = useState({
        theaterName : "",
        location : "",
    });
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setInput({...input,[e.target.name]: e.target.value})
    }
    const handleSubmit = async(e)=>{
        console.log(input);
        e.preventDefault();
        
        try {
            const res = await axios.post(`${THEATER_API_ENDPOINT}/create`,input,{
                withCredentials : true,
            })
            console.log(res);

            if(res?.data?.success){
                toast.success(res.data.message || "Login successful!");
                setTimeout(() => {
                    navigate('/admin/theaters');
                  }, 2000);
            }else {
                toast.error(res.data.message || "Login failed!");
              }
            

        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred!");
            console.log(error);
            
        }
    }
  return (
    <div>
        <Navbar />

        <div className='max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10'>
        <h2 className="text-white text-xl mb-4">Create New Theater</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="theaterName">
            Theater Name
          </label>
          <input
            type="text"
            id="theaterName"
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            name='theaterName'
            value={input.theaterName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name='location'
            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input.location}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white mt-5"
      
        > Create Theater </button>
            </form>
        </div>
        <ToastContainer position="top-right"/>
    </div>
  )
}

export default CreateTheater