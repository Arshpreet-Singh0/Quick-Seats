import React from 'react'
import SearchTypes from './SearchTypes'

const SearchTicket = () => {
  return (
    <div className='flex justify-center items-center mt-10 h-[450px] w-full'>
        <div className='flex flex-col items-center w-[1200px] h-[275px] shadow-xl'>
            <div className='absolute bottom-24 w-[928px] h-[100px] shadow-lg'>
                    <SearchTypes />
            </div>
            
            <div className='w-full h-4 mt-16 border border-black'>

            </div>

            <div className='grid grid-cols-8 w-[1100px] h-[112px] border border-black mt-10'>
                <div className='col-span-2 border border-black'>


                </div>
                <div className='col-span-2 border border-black'>


                </div>
                <div className='col-span-1 border border-black'>


                </div>
                <div className='col-span-1 border border-black'>


                </div>
                <div className='col-span-2 border border-black'>


                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchTicket