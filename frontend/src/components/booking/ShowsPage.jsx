import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Shows from "./Shows";
import { useParams } from "react-router-dom";
import { useGetUserLocation } from "../../hooks/useGetUserLocation";
import { useSelector } from "react-redux";
import useGetAllShows from "../../hooks/useGetAllShows";


const ShowsPage = () => {
  useGetUserLocation();
  const {city} = useSelector(store=>store.location);
  
  const {id} = useParams();
  
  
  useGetAllShows(id,city);
  const {allShows} = useSelector(store=>store.shows);
  console.log(allShows);
  
  // console.log(allShows);

  const groupShowsByTheaterName = (shows)=>{
    const grouped = {};

    shows.forEach(show => {
        const theaterName = show.theater.theaterName;
        if (!grouped[theaterName]) {
            grouped[theaterName] = {
                theaterName: theaterName,
                location: show.theater.location,
                shows: []
            };
        }
        grouped[theaterName].shows.push({
            auditorium: show.auditorium,
            date: show.date,
            movie: show.movie,
            seating: show.seating,
            time: show.time,
            _id: show._id
        });
    });
    return Object.values(grouped);
}

const showsGroupedByTheater = groupShowsByTheaterName(allShows);
console.log(showsGroupedByTheater);


const extractUniqueDates = (data)=>{
  const dateSet = new Set(); 


  data.forEach(theater => {
    
      theater.shows.forEach(show => {
          dateSet.add(show.date);
      });
  });

  return Array.from(dateSet);
}

const dates = extractUniqueDates(showsGroupedByTheater);

  
const [showDate, setShowDate] = useState('');

  const handleShowDateChange = (date) => {
    setShowDate(date);
  };


  const [currDateShows, setCurrDateShows] = useState([]);
  

  useEffect(() => {
    const findShowByDate = (data)=>{
      const filteredShows = [];
      console.log(data);
      
      data.forEach(theater => {
          theater.shows.forEach(show => {
            
              if (show.date === showDate) {
                show.theater = theater.theaterName;
                  filteredShows.push(show);
              }
          });
      });
  
      return filteredShows;
  }
    const shows = findShowByDate(showsGroupedByTheater);
    console.log(shows);
    
    setCurrDateShows(shows);
    
  }, [showDate]);

  // console.log(currDateShows);

  return (
    <div className="w-full">
        <Navbar />

      <div className="flex flex-col items-center m-10">
        <div className="w-full md:w-[70%] p-4">
          <h1 className="text-3xl md:text-4xl text-white">{allShows.length > 0 ? allShows[0].movie.name : "NOT-FOUND"} - English</h1>
        </div>
        <div className="flex gap-3 items-center h-14 w-full md:w-[70%] mt-5 p-4 shadow-white shadow-sm">
          {dates.map((date, idx) => (
            <div
              className={`text-white ${
                showDate == date ? `bg-[#ff7300]` : ``
              } p-2 rounded-sm `}
              onClick={() => handleShowDateChange(date)}
              key={idx}
            >
              {date}
            </div>
          ))}
        </div>
      <div className="md:w-[70%] mt-10">{<Shows allShow={currDateShows} />}</div>
      </div>
    </div>
  );
};

export default ShowsPage;
