import { MovieTicket } from "../models/ticket.schema.js";
import { Movie } from "../models/theater.schema.js";

export const bookTicket = async (req, res) => {
  try {
    const { id } = req.params; //movie id
    const user = req.id;

    const { showtime, seats, price, audi } = req.body;

    if (!seats || seats.length === 0) {
      return res.status(400).json({
        message: "Select seats for booking",
        success: false,
      });
    }

    const movie = await Movie.findById(id).populate({
      path: "theater",
    });

    if (!movie || !movie.theater) {
      return res.status(404).json({
        message: "Movie or theater not found",
        success: false,
      });
    }

    // Get the selected auditorium from the theater's audis array
    const selectedAudi = movie.theater.audis.find((a) => a.name === audi);
    console.log(selectedAudi);
    

    if (!selectedAudi) {
      return res.status(404).json({
        message: "Auditorium not found",
        success: false,
      });
    }

    const availableSeats = selectedAudi.seats;
    
    const unavailableSeats = seats.filter((seat)=>{
        const seatRow = seat.charAt(0);
        const seatNumber = seat.charAt(1);

        return availableSeats.find(
            (s) => (s.seatRow === seatRow && s.seatNumber === seatNumber && !s.isAvailable)
          );
    }
    );

    if (unavailableSeats.length > 0) {
      return res.status(400).json({
        message: `The following seats are unavailable: ${unavailableSeats.join(
          ", "
        )}`,
        success: false,
      });
    }

    const ticket = await MovieTicket.create({
        user,
        movie : id,
        price,
        showtime,
        seats,
    });
  
    const bookedSeats = ticket.seats;
    
    selectedAudi.seats.forEach(seat => {
        console.log(seat.seatRow + seat.seatNumber);
        console.log(bookedSeats.includes(seat.seatRow + seat.seatNumber));
        
        
      if (bookedSeats.includes(seat.seatRow + seat.seatNumber)) {
        seat.isAvailable = false;  // Make the seat unavailable again
        console.log(seat);
        
      }
    });
    console.log(movie.theater.audis);
    
    
    await movie.theater.save();

    res.status(200).json({
      message: "Ticket booked successfully",
      success: true,
      ticket,
    });
  } catch (error) {
    console.log(error);
  }
};

export const cancelTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.id;

    const ticket = await MovieTicket.findOne({ _id: id, user }).populate({
        path: 'movie',
        populate: {
          path: 'theater',
        }
      });

      ticket.status = "Cancelled";
      await ticket.save();
  
      const selectedAudi = ticket.movie.theater.audis.find(audi => audi.name === ticket.audi);
  
      const bookedSeats = ticket.seats;
      
      selectedAudi.seats.forEach(seat => {
        if (bookedSeats.includes(seat.seatRow + seat.seatNumber)) {
          seat.isAvailable = true;  // Make the seat available again
        }
      });

      await ticket.movie.theater.save();

    res.status(200).json({
      message: "Ticket Cancelled",
      success: true,
      ticket,
    });
  } catch (error) {
    console.log(error);
    
  }
};

export const getBookedTickets = async (req, res) => {
  try {
    const id = req.id;

    const tickets = await MovieTicket.find({ user: id });

    return res.status(200).json({
      tickets,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;

    const ticket = await MovieTicket.findById(id).populate({
      path: "movie",
    });

    res.status(200).json({
      ticket,
    });
  } catch (error) {
    console.log(error);
  }
};
