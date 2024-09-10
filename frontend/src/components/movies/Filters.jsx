import React, { useState } from 'react'

const filters = [
    {
      name: "Genres",
      options: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
    },
    {
      name: "Ratings",
      options: ["G", "PG", "PG-13", "R", "NC-17"],
    },
    {
      name: "Release Years",
      options: ["2024","2023", "2022", "2021", "2020"],
    },
    {
      name: "Languages",
      options: ["English", "Hindi", "Spanish", "French"],
    },
  ];

const Filters = () => {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
      };
    
      const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
      };
      console.log(selectedGenre);
      console.log(selectedRating);
      
      

      
  return (
    <div className='text-white ml-5'>
        {filters.map((filter, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold mb-2 text-lg">{filter.name}</h3>
          {filter.options.map((option, idx) => (
            <div key={idx}>
              <input
                type="radio"
                name={filter.name.toLowerCase()}
                id={option}
                value={option}
                checked={
                  filter.name === "Genres"
                    ? selectedGenre === option
                    : selectedRating === option
                }
                onChange={
                  filter.name === "Genres" ? handleGenreChange : handleRatingChange
                }
              />
              <label htmlFor={option} className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Filters