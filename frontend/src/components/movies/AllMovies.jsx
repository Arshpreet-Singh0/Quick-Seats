import React from 'react'
import Card from '../shared/Card';

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

const AllMovies = () => {
  return (
    <div className='flex flex-row flex-wrap '>
        {
            movies.map((movie)=>{
                return <Card movie={movie} />
            })
        }
    </div>
  )
}

export default AllMovies