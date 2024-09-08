import React from 'react'

const Card = ({movie}) => {
  return (
    <div className=' w-80 h-auto rounded-2xl bg-[#1d1d1d] m-5 text-white'>
        <div>
            <img src={movie.img} className='h-60 w-full rounded-t-2xl' alt="" />
        </div>
        <div className='p-4'>
            <h1 className='text-2xl opacity-85 p-1'>{movie.name}</h1>
            <div className='flex justify-between'>
            <span className='text-md opacity-90 p-1'><span className='text-md'><i class="fa-regular fa-clock"></i></span>&nbsp;&nbsp;{movie.time}</span>
            <span className='text-md opacity-90 p-1'><span className='text-md'><i class="fa-regular fa-calendar"></i></span>&nbsp;&nbsp;{movie.date}</span>

            </div>
            <p className='text-sm opacity-90 p-1'><span className='opacity-55'>Language :</span> {movie.language}</p>
            <button className='p-2 bg-[#ff7300] w-full rounded-lg mt-2'>Book Now</button>
        </div>

    </div>
  )
}

export default Card