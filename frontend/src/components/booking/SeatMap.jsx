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
            className={`flex items-center gap-4 ${
              isDifferentSeatType ? 'mt-12' : 'mt-4'
            }`} // Add extra space between different seat types
            key={row}
          >
            <div className='w-20'>
              <strong>Row {row}:</strong>
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
          </div>
        );
      })}
    </div>
  );
};

export default SeatMap;
