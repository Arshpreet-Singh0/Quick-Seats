import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AUDITORIUM_API_ENDPOINT, THEATER_API_ENDPOINT } from '../../../utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar';
import AudisTable from './AuidisTable';

const Audis = () => {
    const [audis, setAudis] = useState([]);
    const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();
    const {id} = useParams();

  

    useEffect(()=>{
        const fetchAudis = async()=>{
            try {
                const res = await axios.post(`${AUDITORIUM_API_ENDPOINT}/get`,{theater:id},{
                    withCredentials : true,
                })
    
                // console.log(res);
                if(res?.data?.success){
                    setAudis(res?.data?.auditoriums)
                }
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchAudis();
    },[]);
  return (
    <>
    <Navbar />
    <div className='p-4'>
        <div className='flex justify-center w-full text-white mb-10 mt-5'>
            <div className='flex justify-between w-[70%]'>
            <input type="text" className='bg-gray-500 p-1 px-3 rounded-md placeholder:text-white focus:border-none' placeholder='Filter by name' />

            <button onClick={()=>navigate(`/${id}/audi/create`)} className='bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md'>New Auditorium</button>
        </div>
        </div>
        <div className='flex justify-center w-full'>
            <AudisTable audis={audis} />

        </div>
    </div>
    </>
  )
}

export default Audis