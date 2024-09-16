import React, { useState } from "react";
import SeatMap from "./SeatMap";

// Sample seat data
const seatData = {
  theater: "AMC Downtown Cinema",
  showId: "S456",
  movie: "Inception",
  time: "02-10-2024, 11.00 AM",
  seating: {
    A: [
      { seatNumber: 1, seatType: "Recliner", booked: false, price: 600 },
      { seatNumber: 2, seatType: "Recliner", booked: false, price: 600 },
      { seatNumber: 3, seatType: "Recliner", booked: true, price: 600 },
      { seatNumber: 4, seatType: "Recliner", booked: false, price: 600 },
      { seatNumber: 5, seatType: "Recliner", booked: false, price: 600 }
    ],
    B: [
      { seatNumber: 1, seatType: "VIP", booked: false, price: 400 },
      { seatNumber: 2, seatType: "VIP", booked: true, price: 400 },
      { seatNumber: 3, seatType: "VIP", booked: false, price: 400 },
      { seatNumber: 4, seatType: "VIP", booked: false, price: 400 },
      { seatNumber: 5, seatType: "VIP", booked: true, price: 400 }
    ],
    C: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    D: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    E: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    F: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    G: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    H: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    I: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ],
    J: [
      { seatNumber: 1, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 2, seatType: "Regular", booked: true, price: 200 },
      { seatNumber: 3, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 4, seatType: "Regular", booked: false, price: 200 },
      { seatNumber: 5, seatType: "Regular", booked: true, price: 200 }
    ]
  }
};


function Seats() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to handle seat selection
  const handleSeatClick = (row, seat) => {
    if (!seat.booked) {
      const seatIdentifier = `${row}${seat.seatNumber}`;

      // Check if the seat is already selected
      if (selectedSeats.includes(seatIdentifier)) {
        // Deselect the seat
        setSelectedSeats(selectedSeats.filter((s) => s !== seatIdentifier));
        setTotalPrice(totalPrice - seat.price);
      } else {
        // Select the seat
        setSelectedSeats([...selectedSeats, seatIdentifier]);
        setTotalPrice(totalPrice + seat.price);
      }
    }
  };
  console.log(totalPrice);
  console.log(selectedSeats);
  
  

  return (
    <>
    <div className="w-full text-white  mb-28">
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="w-[70%] p-2">
            <h1 className="text-2xl mb-1">{seatData.movie}</h1>
            <p className="text-sm mb-1">{seatData.theater}</p>
            <p className="text-sm">{seatData.time}</p>
        </div>
        <div className="h-10 bg-slate-800 w-full"></div>

        <div className="">
            <SeatMap seatData={seatData} handleSeatClick={handleSeatClick} selectedSeats={selectedSeats}/>
        </div>
      </div>


    </div>
    {
      selectedSeats.length!=0 && (<div className="flex justify-center items-center h-20 w-full fixed bottom-0 bg-slate-500">
        <button className="bg-[#ff7300] py-2 px-24 text-white rounded-md">Pay {totalPrice}</button>
      </div>)
    }
      
    </>
  );
}

export default Seats;
