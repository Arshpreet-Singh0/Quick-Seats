import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import AllMovies from './AllMovies'
import Filters from './Filters'
import SearchBox from './SearchBox'

function MoviePage() {
  return (
    <div>
      <Navbar />

      <SearchBox />
      <div className="flex mt-6 px-4">
        <div className="w-[15%]">
          <Filters />
        </div>
        
        <div className="w-[80%]">
          <AllMovies />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MoviePage