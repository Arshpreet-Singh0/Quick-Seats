import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { THEATER_API_ENDPOINT } from '../../utils/constant';
import TheaterTable from './TheaterTable';
import { useNavigate } from 'react-router-dom';

const AllTheaters = () => {
    const [allTheaters, setAllTheaters] = useState([]);
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/admin/theaters/create')
    }
    

    useEffect(()=>{
        const fetchTheaters = async()=>{
            try {
                const res = await axios.get(`${THEATER_API_ENDPOINT}/get`,{
                    withCredentials : true,
                })
    
                console.log(res?.data?.theaters);
                if(res?.data?.success){
                    setAllTheaters(res?.data?.theaters)
                }
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchTheaters();
    },[]);
  return (
    <div className='p-4'>
        <div className='flex justify-center w-full text-white mb-10 mt-5'>
            <div className='flex justify-between w-[70%]'>
            <input type="text" className='bg-gray-500 p-1 px-3 rounded-md placeholder:text-white focus:border-none' placeholder='Filter by name' />

            <button onClick={handleClick} className='bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md'>New Theater</button>
        </div>
        </div>
        <div className='flex justify-center w-full'>
            <TheaterTable theaters={allTheaters} />

        </div>
    </div>
  )
}

export default AllTheaters