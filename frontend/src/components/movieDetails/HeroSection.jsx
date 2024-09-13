import React from "react";

const HeroSection = ({ movie }) => {
  return (
    <div className="flex justify-center w-full md:bg-[#1A1A1A]">
      <div
        className="flex justify-center items-center w-full md:w-[80%] h-[480px] bg-cover bg-center bg-[#1f1f1f] relative"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 26, 26, 1), rgba(0, 0, 0, 0.5) 50%, rgba(26, 26, 26, 1)), url(${movie.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex w-full px-6 md:px-0 lg:w-[70%] h-[80%] bg-[#1c2a36] rounded-lg">
          <div className="md:w-[30%]">
            <img
              src={movie.img}
              className="w-full h-full rounded-t-lg"
              alt=""
            />
            <div className="bg-black text-white text-[12px] text-center p-1 rounded-b-lg">
              Releasing On: {movie.date}
            </div>
          </div>

          <div className="pl-8 pt-12 text-white opacity-95">
            <h1 className="text-3xl">{movie.name}</h1>

            <div className="hidden lg:flex justify-between border mt-3 p-2 md:p-4 md:w-96 rounded-md">
              <div>
                <h5>100.2K are interested</h5>
                <p className="text-[10px]">
                  Are you interested in watching this movie?
                </p>
              </div>
              <div>
                <button className="hidden md:block bg-[#F2F5F9] text-black px-2 py-2 rounded-sm">
                  I'm Interested
                </button>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="bg-[#F2F5F9] text-black rounded-sm px-3 py-1">
                2D
              </div>
              <div className="bg-[#F2F5F9] text-black rounded-sm px-3 py-1 ml-5">
                {movie.language}
              </div>
            </div>

            <div className="mt-6">
              <p className="opacity-85">
                {movie.time}&nbsp;&nbsp;&nbsp;&nbsp; Action Drama
                &nbsp;&nbsp;&nbsp;&nbsp;UA
              </p>
            </div>
            <div className="mt-7">
              <button className="py-3 px-5 md:px-10 bg-[#ff7300] rounded-sm text-black">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
