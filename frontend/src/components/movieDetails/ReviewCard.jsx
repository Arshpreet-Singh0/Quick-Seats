import React from 'react'

const ReviewCard = ({review}) => {
  return (
    <div className=' border p-5 h-[246px] w-[315px] md:w-[446px] rounded-md overflow-hidden'>
        <div className='flex justify-between items-center w-full h-[40px]'>
            <div className='flex items-center'>
            <div className='flex justify-center items-center h-[40px] w-[40px] rounded-full border'>
                <i className="fa-regular fa-user text-2xl"></i>
            </div>
            <div>
            <span className='ml-2'>{review?.username}</span>
            </div>
            </div>
            <div>
            <h3>
                <i className="fa-solid fa-star text-yellow-600 text-xl mr-2"></i>
                {review.rating} / 5
                </h3>
            </div>
            
        </div>

        <div className='mt-5 h-24 overflow-hidden'>
            <p className='opacity-75 text-md'>{review.review}</p>
        </div>

        <div className='flex justify-between items-center mt-6'>
                <p><i className="fa-solid fa-thumbs-up mr-1"></i> {review.likes}</p>

                <p>{review.daysAgo} days Ago</p>
        </div>
    </div>
  )
}

export default ReviewCard