import React from 'react'
import Events from './Events.jsx'
import Filters from './Filters.jsx'

const HomePage = () => {
  return (
    <div className='flex justify-center w-full'>
    <div className='w-[90%] items-center'>
      <Filters />
      <Events />
    </div>
    </div>
  )
}

export default HomePage