import React from "react";

const filters = [
  {
    name: "Comedy",
    img: "/media/comedy.png",
  },
  {
    name: "Romantic",
    img: "/media/romantic.png",
  },
  {
    name: "Horror",
    img: "/media/horror.png",
  },
  {
    name: "Action",
    img: "/media/action.png",
  },
  {
    name: "Documentary",
    img: "/media/documentary.png",
  },
  {
    name: "Drama",
    img: "/media/drama.png",
  },
  {
    name: "War",
    img: "/media/war.png",
  },
  {
    name: "Animation",
    img: "/media/animation.png",
  },
];

const Filters = () => {
  return (
    <>
    <h1 className="text-white mt-3 mx-4 md:text-xl md:mx-16">Categories : </h1>
    <div className="flex justify-center w-full h-24 mt-5 overflow-x-auto no-scrollbar mb-14">
      
      <div className="flex space-x-4 md:space-x-16 w-auto min-w-0 text-white filter px-4">
        {filters.map((filter, index) => {
          return (
            <div key={index} className="flex items-center justify-center flex-col border rounded-lg bg-[#01041c] min-w-[100px]">
              <div className="h-14">
                <img src={filter.img} className="h-full w-auto" alt={filter.name} />
              </div>
              <p className="opacity-70 text-sm">{filter.name}</p>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Filters;
