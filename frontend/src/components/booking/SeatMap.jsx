import React from 'react';

const SeatMap = ({ seatData, handleSeatClick, selectedSeats}) => {
  console.log(seatData.seating); // Log seating data for debugging

  let previousSeatType = null; // Track the previous row's seat type

  return (
    <div className='p-4'>
      {Object.keys(seatData.seating).map((row, rowIndex) => {
        const currentSeatType = seatData.seating[row][0]?.seatType || '';

        // Check if the seat type has changed
        const isDifferentSeatType = previousSeatType !== currentSeatType;

        // Store the current seat type for the next iteration
        previousSeatType = currentSeatType;

        return (
          <div
            className={`flex flex-col md:flex-row justify-center items-center gap-4 ${
              isDifferentSeatType ? 'mt-12' : 'mt-4'
            }`} // Add extra space between different seat types
            key={row}
          >
            <div className="min-w-[60px] md:w-20 text-center">
              <p className='opacity-75'>Row {row}:</p>
            </div>
            <div className='flex'>
              {seatData.seating[row].map((seat, index) => (
                <div
                  key={seat.seatNumber}
                  className={`mr-4 ${
                    index === Math.floor(seatData.seating[row].length / 2)
                      ? 'ml-10'
                      : ''
                  }`}
                >
                  <button onClick={()=>handleSeatClick(row, seat)}
                    className={`border border-green-500 p-2 ${
                      seat.booked ? 'bg-gray-400' : selectedSeats.includes(`${row}${seat.seatNumber}`) ? `bg-green-400` : `bg-none`
                    } w-12 h-12 text-white`}
                    disabled={seat.booked}
                  >
                    {seat.seatNumber}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className='text-sm opacity-75'>Price : {seatData.seating[row][0].price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatMap;
