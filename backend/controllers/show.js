import { Auditorium, Show } from "../models/theater.schema.js";

export const createShow = async(req, res)=>{
    try {
        const {movie,date, time,theater,auditorium} = req.body;

        const audi = await Auditorium.findById(auditorium);

        if(!audi){
            return res.status(400).json({
                message : 'Selected Auditorium not found',
                success : false,
            })
        }
        console.log(audi);
        
        const show = await Show.create({
            movie: movie,
            time: time,
            date,
            theater,
            auditorium: auditorium,  
            seating: audi?.seats?.map(seat => ({
              row: seat.row,
              seatNumber: seat.seatNumber,
              seatType: seat.seatType,
              booked: false,
              price: seat.price
            }))
          });

          if(!show){
            return res.status(200).json({
              meassage : "All fiedls are required.",
              success : false,
            })
          }

        return res.status(200).json({
          meassage : "Show cretaed sucessfully.",
          success : true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const getShows = async(req, res)=>{
    const { location, movie } = req.query;
    // console.log( movie);
    // console.log(location);
    // location = "Chandigarh"
   
   
    const shows = await Show.find()
      .populate({
        path: 'theater',
      })
      .populate({
        path: 'movie',
        // match: { _id : movie }, 
        // select: 'name',
      })
      .exec();

      // console.log(shows);
      // shows.map((s)=>{
      //   console.log(s.theater.location);
        
      // })
      const filteredShows = shows.filter((show)=> (show.movie._id==movie && show.theater.location.toLowerCase()==location.toLowerCase()))
      
      // console.log(filteredShows);
      

    // const filteredShows = shows.filter(show => show.theater && show.movie);
      // console.log(filteredShows);
      // console.log("hi");
      
      
    // if (filteredShows.length === 0) {
    //   return res.status(404).json({
    //     message: 'No shows found for the given location and movie name',
    //     success: false,
    //   });
    // }

    return res.status(200).json({
      success: true,
      shows: filteredShows,
    });
}

export const getShowbyId = async(req,res)=>{
  try {
    const {id} = req.params;

    const show = await Show.findById(id).populate({
      path : 'movie',
    }).populate({
      path : 'theater'
    });

    return res.status(200).json({
      show,
      success : true,
    })
  } catch (error) {
    console.log(error);
    
  }
}