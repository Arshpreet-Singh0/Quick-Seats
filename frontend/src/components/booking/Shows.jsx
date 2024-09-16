import React from "react";
import { useNavigate } from "react-router-dom";

const Shows = ({ allShow }) => {
  const navigate = useNavigate();

  const handleShowTimeClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="">
      {allShow &&
        allShow.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center p-4 shadow-white shadow-sm text-white mt-2 "
          >
            {/* Theater Info */}
            <div className="w-full md:w-[50%] mb-4 md:mb-0">
              <p className="text-sm">
                <span>
                  <i className="fa-regular fa-heart mr-2 text-lg"></i>
                </span>{" "}
                {item.theater}
              </p>
              <span className="text-green-300 text-sm">
                <i className="fa-solid fa-mobile-screen-button ml-1 mr-2 mt-2"></i>{" "}
                M-Ticket
              </span>
              <span className="text-[#f47f1f] ml-2 text-sm">
                <i className="fa-solid fa-burger"></i> Food & Beverage
              </span>
            </div>

            {/* Showtimes */}
            <div className="flex-1 flex flex-wrap md:flex-row gap-2 md:gap-4 overflow-auto">
              {item.shows &&
                item.shows.map((show, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleShowTimeClick(show.show_id)}
                    className="border py-[8px] w-24 text-center text-green-300 hover:bg-white hover:text-black mt-2 cursor-pointer"
                  >
                    {show.time}
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shows;
