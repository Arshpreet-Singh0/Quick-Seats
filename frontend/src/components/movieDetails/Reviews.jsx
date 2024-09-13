import React from "react";
import ReviewCard from "./ReviewCard";
const reviews = [
    {
      username: "john_doe",
      rating: 5,
      review: "Absolutely fantastic movie! The plot was mind-blowing and the visual effects were top-notch. A must-watch for any sci-fi fan.",
      daysAgo: 2,
      likes: 150
    },
    {
      username: "moviebuff99",
      rating: 4,
      review: "Great movie with amazing performances, though the plot can be a bit confusing at times. Still, highly enjoyable and worth a re-watch.",
      daysAgo: 5,
      likes: 98
    },
    {
      username: "cinemalover23",
      rating: 3,
      review: "The film is visually stunning, but I found the story a little too complex for my liking. It requires full attention throughout.",
      daysAgo: 10,
      likes: 45
    },
    {
      username: "avengersfan12",
      rating: 4.5,
      review: "Loved the action sequences and the cast was brilliant! Could have been a bit shorter, but overall an excellent movie experience.",
      daysAgo: 1,
      likes: 210
    },
    {
      username: "chris_pine_fan",
      rating: 2,
      review: "Not really my cup of tea. The concept was intriguing, but the execution felt a bit too drawn out and confusing for me.",
      daysAgo: 7,
      likes: 30
    }
  ];
  
  
const Reviews = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-3xl text-[white]">Top reviews </h1>
        <h1 className="text-white opacity-65">
          10.2k reviews <i className="fa fa-chevron-right text-xs"></i>
        </h1>
      </div>

      <div className="flex mt-10 overflow-x-auto no-scrollbar gap-5">
      {
        reviews.map((review)=>{
            return (
                <div className="">
                    <ReviewCard review={review} />
                </div>
            )
        })
      }
      </div>

    </div>
  );
};

export default Reviews;
