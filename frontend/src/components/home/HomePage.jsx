import React from 'react'
import Events from './Events.jsx'
import Filters from './Filters.jsx'
import Navbar from '../shared/Navbar.jsx'
import Footer from '../shared/Footer.jsx'
import useGetAllMovies from '../../hooks/useGetAllMovies.jsx'


const HomePage = () => {
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