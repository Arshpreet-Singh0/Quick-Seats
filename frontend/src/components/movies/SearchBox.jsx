import React, { useState } from 'react'

const SearchBox = () => {
    const [searchtext, setSearchtext] = useState("");

    const handleChange = (e)=>{
        console.log(searchtext);
        
        setSearchtext(e.target.value);
    }
  return (
    <div className='flex justify-center items-center h-24 text-white'>
        <div className='w-3/4 md:w-1/3'>
            
            <input type="text" value={searchtext} onChange={handleChange} className='w-full p-2 rounded-md placeholder:text-center focus:outline-black text-black' placeholder='Search movies, events by Name'/>

            <button></button>
        </div>
    </div>
  )
}

export default SearchBox