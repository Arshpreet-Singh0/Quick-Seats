import React from "react";

const HomeHero = () => {
  return (
    <div
      className="w-full h-[70vh] md:h-[60vh]  bg-cover bg-center text-center"
      style={{ backgroundImage: "url(/media/homehero2.jpg)" }}
    >
      <div className="border-2 inline-block mt-10 mb-3 p-2 rounded-2xl bg-gray-200 text-[#ff7300]">
        <h3>Book your tickets for free</h3>
      </div>
      <h1 className="text-4xl md:text-5xl mt-10 font-bold text-black text-center px-4 mb-10">
        Discover, Book, and Enjoy <br />
        <span className="text-[#008cff] mt">Every Ticket You Need</span>
      </h1>
      <p className="text-lg font-bold">Experience the convenience and reliability of QuickSeats, your go-to solution for all your ticketing needs.</p>
      <div className="flex justify-center mt-4">
        <div className="relative w-full max-w-md mt-10">
          <input
            type="text"
            className="border border-gray-300 rounded-2xl p-2 pl-4 pr-12 w-full text-center focus:outline-none "
            placeholder="Search what you want to do Today"
          />
          <button className="absolute right-0 h-full top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-r-2xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
