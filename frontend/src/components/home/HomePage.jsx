import React, { useEffect } from 'react'
import Events from './Events.jsx'
import Filters from './Filters.jsx'
import Navbar from '../shared/Navbar.jsx'
import Footer from '../shared/Footer.jsx'
import useGetAllMovies from '../../hooks/useGetAllMovies.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(user && user.role=='admin'){
      navigate('/admin/theaters');
    }
  },[])
  useGetAllMovies();
  return (
    <>
    <Navbar />
    <div className='flex justify-center w-full h-full'>
    <div className='w-[90%] items-center'>
      <Filters />
      <Events />
    </div>
    </div>

    <Footer />
    </>
  )
}

export default HomePage