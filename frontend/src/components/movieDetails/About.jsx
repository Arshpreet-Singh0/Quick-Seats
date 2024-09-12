import React from 'react'

const About = ({movie}) => {
  return (
    <div className='flex justify-center items-center p-10 bg-[#1a1a1a] h-full pb-24'>
        <div className='w-[80%] text-white'>
            <h1 className='text-3xl mb-2 opacity-95'>About : </h1>
            <p className='opacity-90'>{movie.about}</p>
        </div>
    </div>
  )
}

export default About