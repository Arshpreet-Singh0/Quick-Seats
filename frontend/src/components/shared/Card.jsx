import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({movie}) => {
  const navigate = useNavigate();
  const handleClick = (name)=>{
      navigate(`/movie/${name}`);
  }
  return (
    <div className=' w-80 h-full rounded-2xl bg-[#1d1d1d] m-5 text-white'>
        <div>
            <img src={movie.image} className='h-60 w-full rounded-t-2xl' alt="" />
        </div>
        <div className='p-4'>
            <h1 className='text-2xl opacity-85 p-1'>{movie.name}</h1>
            <div className='hidden md:flex justify-between'>
            <span className='text-md opacity-90 p-1'><span className='text-md'><i className="fa-regular fa-clock"></i></span>&nbsp;&nbsp;{movie.runtime}</span>
            <span className='text-md opacity-90 p-1'><span className='text-md'><i className="fa-regular fa-calendar"></i></span>&nbsp;&nbsp;{movie.
releaseDate.slice(0,10)
}</span>

            </div>
            <p className='text-sm opacity-90 p-1'><span className='opacity-55'>Language :</span> {movie.language}</p>
            <button className='p-2 bg-[#ff7300] w-full rounded-lg mt-2' onClick={()=>handleClick(movie.name)}>See Details</button>
        </div>

    </div>
  )
}

export default Card