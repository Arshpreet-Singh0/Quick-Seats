import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../shared/Navbar.jsx'
import Footer from '../shared/Footer.jsx'
import HeroSection from './HeroSection.jsx';
import About from './About.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { MOVIE_API_ENDPOINT } from '../../utils/constant.js';


const MovieDetailsPage = () => {
  const { name } = useParams();
  // const dispatch  = useDispatch();
  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`${MOVIE_API_ENDPOINT}/get/${name}`, {
          withCredentials: true
        });
        console.log(res?.data?.movie);
        
        if (res?.data?.success) {
          setMovie(res?.data?.movie);
        }
      } catch (error) {
        console.error("Error fetching the movie data:", error);
      }
    };

    fetchMovie();
  }, []);
  
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