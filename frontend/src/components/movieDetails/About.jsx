import React from "react";
import Cast from "./Cast";
import Reviews from "./Reviews";

const About = ({ movie }) => {
  return (
    <div className="flex justify-center items-center  p-12 bg-[#1a1a1a] h-full  pb-24">
      <div className="w-full md:w-[60%] text-white">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 ">About : </h1>
          <p className="opacity-90">{movie.about}</p>
        </div>

        <hr />
        <Cast />
        <Reviews />
      </div>
    </div>
  );
};

export default About;
