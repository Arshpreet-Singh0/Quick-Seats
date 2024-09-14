import React from "react";

const Shows = ({ allShow }) => {

  return (
    <div className="">
      {allShow &&
        allShow.map((item, idx) => (
          <div key={idx} className="flex items-center p-4 shadow-white shadow-sm text-white mt-2 ">
            <div>
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
            <div className="md:flex flex-1 gap-3 md:gap-8 ml-4 md:ml-24 overflow-auto">
                {
                  item.shows && item.shows.map((show, idx)=>(
                    <div key={idx} className="border py-[8px] w-24 text-center text-green-300 hover:bg-white hover:text-black mt-2">{show.time}</div>
                  ))
                }
            </div>
            
          </div>
          
        ))}

    </div>
  );
};

export default Shows;
