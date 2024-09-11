import React from 'react';

const Image = ({ movie }) => {
  return (
    <div>
      {/* Image container */}
      <div
        className="flex justify-center items-center w-full h-[500px] bg-cover bg-center bg-[#1f1f1f] relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1 ), transparent), url(${movie.img})`,
          backgroundSize: 'cover', // Ensures the image covers the entire container
          backgroundPosition: 'center', // Centers the image
        }}
      >
        <div className='flex border border-white w-[60%] h-[80%]'>
          <div className='border w-[25%]'>
            <img src={movie.img} className='w-full h-full' alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Image;
