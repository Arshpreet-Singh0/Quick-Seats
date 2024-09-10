import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import AllMovies from './AllMovies';
import Filters from './Filters';
import SearchBox from './SearchBox';

function MoviePage() {
  return (
    <div>
      <Navbar />

        <SearchBox />
        
      <div className="flex px-4">
        <div className="w-[30%] md:w-[15%] sticky top-20 h-full">
          <Filters />
        </div>

        <div className="w-[70%] md:w-[70%]">
          <AllMovies />
        </div>
        <div className='hidden md:block text-white md:w-[15%] sticky top-20 h-full'>
          OFFERS
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MoviePage;
