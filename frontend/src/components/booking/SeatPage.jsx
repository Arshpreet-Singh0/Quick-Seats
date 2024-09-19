import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../shared/Navbar';
import Seats from './Seats';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SHOWS_API_ENDPOINT } from '../../utils/constant';

const SeatPage = () => {

  const {id} = useParams();
  const groupSeatsByRow = (data) => {
    const groupedSeating = data.seating.reduce((acc, seat) => {
      const { row } = seat;
      if (!acc[row]) {
        acc[row] = [];
      }
      acc[row].push({
        seatNumber: seat.seatNumber,
        seatType: seat.seatType,
        booked: seat.booked,
        price: seat.price,
        _id: seat._id,
      });
      return acc;
    }, {});
  
    data.seating = groupedSeating;
    return data;
  };
  

    const [show, setShow] = useState(null);

    useEffect(()=>{
        const fetchShow = async()=>{
            try {
                const res = await axios.get(`${SHOWS_API_ENDPOINT}/getshow/${id}`);

                // console.log(res?.data?.show);
                if(res?.data?.success){
                  const data = groupSeatsByRow(res?.data?.show);
                  console.log(data);
                  
                  setShow(data);
                }
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchShow();
    },[id]);

    
  if (!show) {
    // Render a loading state or null if the show data is not yet loaded
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
        <Navbar />
        <Seats seatData={show}/>
    </div>
  )
}

export default SeatPage