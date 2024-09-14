import React from "react";

const Shows = ({ allShow }) => {
  console.log(allShow.shows);

  return (
    <div className="">
      {allShow.shows &&
        allShow.shows.map((item) => (
          <div className="flex items-center p-4 shadow-white shadow-sm text-white mt-2 ">
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
            <div className="ml-24">
                <div className="border py-[8px] w-24 text-center text-green-300 hover:bg-white hover:text-black">{item?.time}</div>
            </div>
            
          </div>
          
        ))}

    </div>
  );
};

export default Shows;
