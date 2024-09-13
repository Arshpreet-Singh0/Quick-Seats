import React from 'react';

let arr = [1, 2, 3, 4, 5, 6];

const Cast = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl'>Cast</h1>
      <div className='flex justify-between items-center h-48 overflow-x-auto no-scrollbar '>
        <div className='flex gap-3 '>
          {arr.map((idx) => {
            return (
              <div key={idx} className='flex-shrink-0 w-40 h-full flex flex-col justify-center items-center'>
                <img
                  src='https://townsquare.media/site/252/files/2019/04/avengers-then-now.jpg?w=780&q=75'
                  className='w-32 h-32 rounded-full'
                  alt=''
                />
                <h3 className='text-white mt-1 opacity-80'>Scarlett</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cast;
