import { Auditorium, Show } from "../models/theater.schema";

export const createShow = async(req, res)=>{
    try {
        const {movie, time,theater,auditorium} = req.body;

        const audi = await Auditorium.findById(auditorium);

        if(!audi){
            return res.status(400).json({
                message : 'Selected Auditorium not found',
                success : false,
            })
        }
        const show = new Show({
            movie: movie,
            time: time,
            theater,
            auditorium: auditorium,  
            seating: auditorium.seats.map(seat => ({
              row: seat.row,
              seatNumber: seat.seatNumber,
              seatType: seat.seatType,
              booked: false,
              price: seat.price
            }))
          });
    } catch (error) {
        console.log(error);
        
    }
}

export const getShows = async(req, res)=>{
    const { location, movieName } = req.body;
    const shows = await Show.find()
      .populate({
        path: 'theater',
        match: { location },
        select: 'name location',
      })
      .populate({
        path: 'movie',
        match: { name: movieName }, 
        select: 'name', 
      })
      .exec();

    const filteredShows = shows.filter(show => show.theater && show.movie);

    if (filteredShows.length === 0) {
      return res.status(404).json({
        message: 'No shows found for the given location and movie name',
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      shows: filteredShows,
    });
}
