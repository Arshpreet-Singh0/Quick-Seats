import React from 'react'

const Footer = () => {
  return (
    <div className='hidden md:flex flex-col items-center justify-center border-t mt-24 text-white bg-[#1e1e1e]'>
        <div className='flex justify-center items-center mt-5 w-full bg-gray-900 h-16 '>
            <p className='opacity-75'><span className='mr-3'><b>List your Show Now</b></span> Got a show, event, activity or a great experience? Partner with us & get listed on QuickSeats</p>

            <button className='md:ml-24 bg-[#ff7300] p-2 rounded-lg'>Create Account now!</button>
        </div> 

        <div className='mt-5 w-[80%] text-center mb-5'>

                <h1 className='text-2xl opacity-75'><i className="fa-brands fa-facebook mr-2"></i> <i className="fa-brands fa-x-twitter mr-2"></i> <i className="fa-brands fa-instagram"></i></h1>

                <p className='text-sm opacity-40 mt-3'>Copyright 2024 © Somal Entertainment Pvt. Ltd. All Rights Reserved.</p>

                <p className='text-sm opacity-40 mt-2'>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>

        </div>
    </div>
  )
}

export default Footer