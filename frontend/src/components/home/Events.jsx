import React from "react";
import Card from "../shared/Card";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const Events = () => {
  const {allMovies} = useSelector(store=>store.movie);
    const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center mx-10 md:mx-14">
        <h1 className="text-4xl text-[white] mb-2 opacity-85">Popular </h1>
        <h1 className="text-white opacity-65 hover:opacity-100" onClick={()=>navigate("/allmovies")}>Sell All <i className="fa fa-chevron-right"></i></h1>
      </div>
      <div className=" w-full flex items-center justify-evenly flex-wrap p-5 ">
        {allMovies.slice(0,4).map((movie, idx) => {
          return <div key={idx}>
            <Card movie={movie} />
          </div>;
        })}
      </div>
    </>
  );
};

export default Events;
