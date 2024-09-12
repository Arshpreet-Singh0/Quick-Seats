import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar.jsx'
import Footer from '../shared/Footer.jsx'
import HeroSection from './HeroSection.jsx';
import About from './About.jsx';
const movies = [
  {
    name: "Inception",
    id: 1,
    description: "Sci-Fi/Thriller",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://i.scdn.co/image/ab67616d0000b273a883e26f90ab617c91b90e56",
    about: "A mind-bending thriller that explores the depths of dream manipulation and espionage."
  },
  {
    name: "The Lion King",
    id: 2,
    description: "Animation/Family",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
    about: "A heartwarming tale of a young lion cub's journey to reclaim his kingdom."
  },
  {
    name: "Avengers",
    id: 3,
    description: "Action/Adventure",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg",
    about: "Earth's mightiest heroes must come together to face the threat of global destruction."
  },
  {
    name: "Hamilton",
    id: 4,
    description: "Musical/Theater",
    time: "2 : 10 : 21",
    date: "02-10-2024",
    language: "English",
    img: "https://i.ytimg.com/vi/DSCKfXpAGHc/maxresdefault.jpg",
    about: "A revolutionary musical that brings the story of American Founding Father Alexander Hamilton to life."
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
      <HeroSection movie={movie}/>
      <About movie={movie}/>
      <Footer />
    </div>
  )
}

export default MovieDetailsPage