import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { MOVIE_API_ENDPOINT } from '../utils/constant'
import { setAllMovies } from '../redux/movieSlice'

const useGetAllMovies = () => {
    const dispatch = useDispatch();
    

  useEffect(()=>{
    const fetchAllMovies = async()=>{
        try {
            const res = await axios.get(`${MOVIE_API_ENDPOINT}/get`, {withCredentials:true});
            // console.log(res?.data);
            
            if(res.data.success){
                dispatch(setAllMovies(res?.data?.movies));
            }
            

        } catch (error) {
            console.log(error);
            
        }
    }
    fetchAllMovies();
  },[])
}

export default useGetAllMovies