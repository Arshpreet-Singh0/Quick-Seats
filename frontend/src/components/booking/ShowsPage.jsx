import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import Shows from "./Shows";
import { useParams } from "react-router-dom";

const movieShows = [
  {
    theater: "AMC Downtown Cinema",
    address: "123 Main St, Downtown",
    city: "New York",
    shows: [
      {
        show_id: 101,
        time: "10:00 AM",
        date: "02-10-2024",
        available_seats: 150,
      },
      {
        show_id: 106,
        time: "4:00 PM",
        date: "03-10-2024",
        available_seats: 100,
      },
      {
        show_id: 99,
        time: "10:00 PM",
        date: "03-10-2024",
        available_seats: 100,
      },
    ],
  },
  {
    theater: "Regal Sunset Mall",
    address: "456 Sunset Blvd, West End",
    city: "Los Angeles",
    shows: [
      {
        show_id: 102,
        time: "1:00 PM",
        date: "02-10-2024",
        available_seats: 120,
      },
      {
        show_id: 107,
        time: "7:00 PM",
        date: "03-10-2024",
        available_seats: 110,
      },
    ],
  },
  {
    theater: "Cineplex Century Plaza",
    address: "789 Century Plaza Rd",
    city: "Chicago",
    shows: [
      {
        show_id: 103,
        time: "4:00 PM",
        date: "02-10-2024",
        available_seats: 200,
      },
      {
        show_id: 108,
        time: "8:00 PM",
        date: "03-10-2024",
        available_seats: 180,
      },
    ],
  },
  {
    theater: "Cinemark City Center",
    address: "321 City Center Ave",
    city: "San Francisco",
    shows: [
      {
        show_id: 104,
        time: "7:00 PM",
        date: "02-10-2024",
        available_seats: 180,
      },
      {
        show_id: 109,
        time: "9:30 PM",
        date: "02-10-2024",
        available_seats: 130,
      },
      {
        show_id: 109,
        time: "9:30 PM",
        date: "02-10-2024",
        available_seats: 130,
      },
      {
        show_id: 109,
        time: "9:30 PM",
        date: "02-10-2024",
        available_seats: 130,
      },
    ],
  },
  {
    theater: "Landmark Theatres",
    address: "555 Landmark Ln",
    city: "Boston",
    shows: [
      {
        show_id: 105,
        time: "9:30 PM",
        date: "02-10-2024",
        available_seats: 100,
      },
      {
        show_id: 110,
        time: "11:30 PM",
        date: "02-10-2024",
        available_seats: 90,
      },
    ],
  },
];

const ShowsPage = () => {
  const { name } = useParams();
  const groupShowsByDate = (movieShows) => {
    const showsByDate = {};

    movieShows.forEach((theater) => {
      theater.shows.forEach((show) => {
        if (!showsByDate[show.date]) {
          showsByDate[show.date] = [];
        }
        showsByDate[show.date].push({
          ...show,
          theater: theater.theater,
          address: theater.address,
          city: theater.city,
        });
      });
    });

    const result = Object.keys(showsByDate).map((date) => ({
      date: date,
      shows: showsByDate[date],
    }));

    return result;
  };

  const showsGroupedByDate = groupShowsByDate(movieShows);
  const [showDate, setShowDate] = useState(`${showsGroupedByDate[0].date}`);
  console.log(showDate);

  const handleShowDateChange = (date) => {
    setShowDate(date);
  };
  const groupShowsByTheater = (data) => {
    const showsByTheater = {};
    console.log(data);
    
  
    // Iterate over each show in the input data's shows array
    data.shows.forEach((show) => {
      const { theater } = show;
  
      // If the theater doesn't exist in the result object, initialize an empty array
      if (!showsByTheater[theater]) {
        showsByTheater[theater] = [];
      }
  
      // Push the show to the appropriate theater array
      showsByTheater[theater].push({
        show_id: show.show_id,
        time: show.time,
        date: show.date,
        available_seats: show.available_seats,
      });
    });
  
    // Convert the result into an array of objects
    const result = Object.keys(showsByTheater).map((theater) => ({
      theater,
      shows: showsByTheater[theater],
    }));
  
    return result;
  };

  const [currDateShows, setCurrDateShows] = useState([]);

  useEffect(() => {
    const shows = showsGroupedByDate.find((show) => {
      return show.date == showDate;
    });
    const res = groupShowsByTheater(shows);

    setCurrDateShows(res);
  }, [showDate]);

  console.log(currDateShows);

  return (
    <div className="w-full">
        <Navbar />

      <div className="flex flex-col items-center m-10">
        <div className="w-full md:w-[70%] p-4">
          <h1 className="text-3xl md:text-4xl text-white">{name} - English</h1>
        </div>
        <div className="flex gap-3 items-center h-14 w-full md:w-[70%] mt-5 p-4 shadow-white shadow-sm">
          {showsGroupedByDate.map((item, idx) => (
            <div
              className={`text-white ${
                showDate == item.date ? `bg-[#ff7300]` : ``
              } p-2 rounded-sm `}
              onClick={() => handleShowDateChange(item.date)}
              key={idx}
            >
              {item.date}
            </div>
          ))}
        </div>
      <div className="md:w-[70%] mt-10">{<Shows allShow={currDateShows} />}</div>
      </div>
    </div>
  );
};

export default ShowsPage;
