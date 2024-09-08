import React from "react";
import Card from "./Card";

const movies = [
  {
    name: "Inception",
    description: "Sci-Fi/Thriller",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://i.scdn.co/image/ab67616d0000b273a883e26f90ab617c91b90e56",
  },
  {
    name: "The Lion King",
    description: "Animation/Family",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
  },
  {
    name: "Avengers",
    description: "Action/Adventure",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
  },
  {
    name: "Hamilton",
    description: "Musical/Theater",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://i.ytimg.com/vi/DSCKfXpAGHc/maxresdefault.jpg",
  },
];

const Events = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-10 md:mx-14">
        <h1 className="text-4xl text-[white] mb-2 ">Popular </h1>
        <h1 className="text-white opacity-65">Sell All <i className="fa fa-chevron-right"></i></h1>
      </div>
      <div className="h-[55vh] w-full flex items-center justify-evenly flex-wrap p-5 ">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    </>
  );
};

export default Events;
