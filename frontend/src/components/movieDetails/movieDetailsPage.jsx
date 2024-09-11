import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar.jsx'
import Image from './Image.jsx';
const movies = [
  {
    name: "Inception",
    id : 1,
    description: "Sci-Fi/Thriller",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://i.scdn.co/image/ab67616d0000b273a883e26f90ab617c91b90e56",
  },
  {
    name: "The Lion King",
    description: "Animation/Family",
    id : 2,
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
    id : 3,
    language: "English",
    img: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
  },
  {
    name: "Hamilton",
    description: "Musical/Theater",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    id : 4,
    language: "English",
    img: "https://i.ytimg.com/vi/DSCKfXpAGHc/maxresdefault.jpg",
  },
];




const MovieDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  const movie = movies.find((m)=> m.id==id);

  console.log(movie);
  
  
  return (
    <div>
      <Navbar />
      <Image movie={movie}/>
    </div>
  )
}

export default MovieDetailsPage