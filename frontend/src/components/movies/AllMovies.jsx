import React from 'react'
import Card from '../shared/Card';
import { useSelector } from 'react-redux';
import useGetAllMovies from '../../hooks/useGetAllMovies';

const AllMovies = () => {
  useGetAllMovies();
  const {allMovies} = useSelector(store=>store.movie);

    
  return (
    <div className='flex items-center justify-center md:px-10 flex-wrap '>
        {
            allMovies.map((movie, idx)=>{
                return <Card key={idx} movie={movie} />
            })
        }
    </div>
  )
}

export default AllMovies