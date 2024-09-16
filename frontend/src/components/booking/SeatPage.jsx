import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../shared/Navbar';
import Seats from './Seats';

const SeatPage = () => {

  return (
    <div>
        <Navbar />
        <Seats />
    </div>
  )
}

export default SeatPage