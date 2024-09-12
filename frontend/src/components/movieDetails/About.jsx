import React from "react";

const About = ({ movie }) => {
  return (
    <div className="flex justify-center items-center  p-12 bg-[#1a1a1a] h-full  pb-24">
      <div className="w-[60%] text-white">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 opacity-95">About : </h1>
          <p className="opacity-90">{movie.about}</p>
        </div>

        <hr />

        <div className="mt-5">

        </div>
      </div>
    </div>
  );
};

export default About;
