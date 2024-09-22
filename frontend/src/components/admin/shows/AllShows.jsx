import React, { useEffect, useState } from 'react'
import Navbar from '../../shared/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { AUDITORIUM_API_ENDPOINT, SHOWS_API_ENDPOINT } from '../../../utils/constant';
import ShowsTable from './ShowsTable';

const AllShows = () => {
    const {audiid} = useParams();
    const [shows, setShows] = useState([]);

    useEffect(()=>{
        const fetchShows = async()=>{
            try {
                const res = await axios.get(`${SHOWS_API_ENDPOINT}/get/audi/${audiid}`,{
                    withCredentials : true,
                });

                // console.log(res);

                if(res?.data?.success){
                    setShows(res?.data?.shows);
                }
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchShows();
    },[])
  return (
    <div>
        <Navbar />
        <div className='p-4'>
        <div className='flex justify-center w-full text-white mb-10 mt-5'>
            <div className='flex justify-between w-[70%]'>
            <input type="text" className='bg-gray-500 p-1 px-3 rounded-md placeholder:text-white focus:border-none' placeholder='Filter by name' />

            <button  className='bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md'>New Theater</button>
        </div>
        </div>
        <div className='flex justify-center w-full'>
            <ShowsTable shows={shows} />
        </div>
    </div>

    </div>
  )
}

export default AllShows