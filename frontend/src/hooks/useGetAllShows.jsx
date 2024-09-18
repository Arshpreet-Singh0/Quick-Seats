import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { SHOWS_API_ENDPOINT } from '../utils/constant'
import {setAllShows} from '../redux/showSlice.js'

const useGetAllShows = (id,location) => {
    const dispatch = useDispatch();
    

  useEffect(()=>{
    console.log(id, location);
    
    const fetchAllShows = async()=>{
        try {
            const res = await axios.get(`${SHOWS_API_ENDPOINT}/getshows`, {
                params: { movie: id, location },
                withCredentials: true
              });
            // console.log(res?.data.shows); 
            
            if(res.data.success){
                dispatch(setAllShows(res?.data?.shows));
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }
    fetchAllShows();
  },[id, location, dispatch])
}

export default useGetAllShows