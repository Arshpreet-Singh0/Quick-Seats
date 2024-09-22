import React, { useState } from 'react';
import Navbar from '../../shared/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import usePagination from '@mui/material/usePagination/usePagination';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AUDITORIUM_API_ENDPOINT } from '../../../utils/constant';

const CreateAudi = () => {
  const [audiName, setAudiName] = useState('');
  const [totalRows, setTotalRows] = useState(0);
  const [rowsData, setRowsData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  // Handle auditorium name change
  const handleAudiNameChange = (e) => {
    setAudiName(e.target.value);
  };

  // Handle total rows change and reset rows data
  const handleTotalRowsChange = (e) => {
    const rows = parseInt(e.target.value, 10);
    setTotalRows(rows);
    setRowsData(
      Array.from({ length: rows }).map(() => ({
        seatType: '',
        price: '',
        totalSeats: ''
      }))
    ); // Initialize rows data
  };

  // Handle row data change
  const handleRowDataChange = (index, key, value) => {
    const updatedRowsData = [...rowsData];
    updatedRowsData[index][key] = value;
    setRowsData(updatedRowsData);
  };

  const convertData = (audiName, rowsData, theaterId) => {
    // Initialize the output object
    const output = {
      name: audiName,
      theater: theaterId,
      seats: []
    };
  
    // Character to start labeling rows ('A', 'B', 'C', etc.)
    let rowLabel = 'A';
  
    // Iterate through each row in rowsData
    rowsData.forEach((row, rowIndex) => {
      const { seatType, price, totalSeats } = row;
  
      // Iterate through each seat in the row
      for (let seatNumber = 1; seatNumber <= parseInt(totalSeats); seatNumber++) {
        // Create a seat object
        const seat = {
          row: String.fromCharCode(rowLabel.charCodeAt(0) + rowIndex), // Convert rowIndex to letter (e.g., A, B, C)
          seatNumber: seatNumber,
          seatType: seatType,
          price: parseInt(price)
        };
  
        // Add the seat object to the seats array
        output.seats.push(seat);
      }
    });
  
    return output;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Perform submission logic here
    const result = convertData(audiName, rowsData, id);
    console.log(result);
    try {
        const res = await axios.post(`${AUDITORIUM_API_ENDPOINT}/create`,result,{
            withCredentials : true,
        })
        console.log(res);
        
        if(res?.data?.success){
            toast.success(res.data.message || "");
            setTimeout(() => {
                navigate(`/theater/${id}/audis`);
              }, 2000);
        }else {
            toast.error(res?.data?.message || "");
        }
        

    } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred!");
        console.log(error);
        
    }
  };

  return (
    <div>
      <Navbar />
      <div className='max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-10'>
        <h2 className='text-white text-xl mb-4'>Create New Auditorium</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-white mb-2' htmlFor='audiName'>
              Auditorium Name
            </label>
            <input
              type='text'
              id='audiName'
              name='audiName'
              className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={audiName}
              onChange={handleAudiNameChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2' htmlFor='totalRows'>
              Total Rows
            </label>
            <input
              type='number'
              id='totalRows'
              name='totalRows'
              className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={totalRows}
              onChange={handleTotalRowsChange}
              min='1'
              required
            />
          </div>
          {totalRows > 0 && (
            <div>
              <h3 className='text-white text-lg mb-2'>Row Details</h3>
              {rowsData.map((row, index) => (
                <div className='mb-4' key={index}>
                  <h4 className='text-white mb-2'>Row {index + 1}</h4>
                  <div className='flex gap-4 mb-2'>
                    <div className='w-1/3'>
                      <label className='block text-white mb-2' htmlFor={`seatType-${index}`}>
                        Seat Type
                      </label>
                      <select
                        id={`seatType-${index}`}
                        name={`seatType-${index}`}
                        className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={row.seatType}
                        onChange={(e) => handleRowDataChange(index, 'seatType', e.target.value)}
                        required
                      >
                        <option value=''>Select Type</option>
                        <option value='Regular'>Regular</option>
                        <option value='Premium'>Premium</option>
                        <option value='VIP'>VIP</option>
                      </select>
                    </div>
                    <div className='w-1/3'>
                      <label className='block text-white mb-2' htmlFor={`price-${index}`}>
                        Price
                      </label>
                      <input
                        type='number'
                        id={`price-${index}`}
                        name={`price-${index}`}
                        className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={row.price}
                        onChange={(e) => handleRowDataChange(index, 'price', e.target.value)}
                        min='1'
                        required
                      />
                    </div>
                    <div className='w-1/3'>
                      <label className='block text-white mb-2' htmlFor={`totalSeats-${index}`}>
                        Total Seats
                      </label>
                      <input
                        type='number'
                        id={`totalSeats-${index}`}
                        name={`totalSeats-${index}`}
                        className='w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={row.totalSeats}
                        onChange={(e) => handleRowDataChange(index, 'totalSeats', e.target.value)}
                        min='1'
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white mt-5'
          >
            Create Auditorium
          </button>
        </form>
      </div>
      <ToastContainer position='top-right' />
    </div>
  );
};

export default CreateAudi;
