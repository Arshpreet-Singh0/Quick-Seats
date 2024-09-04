import {TicketModel} from '../models/ticket.schema.js'
import {EventModel} from '../models/event.model.js'

export const bookTicket = async (req, res) => {
  try {
    const {eventId, seats, paymentDetails } = req.body;
    const userId = req.id;

    // Validate input
    if (!userId || !eventId || !seats || !paymentDetails) {
      return res.status(400).json({ message: 'Missing required fields', success: false });
    }

    // Check if event exists
    const event = await EventModel.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found', success: false });
    }
    

    // Check seat availability
    const bookedSeats = seats.filter(seat => event.seatMap.get(seat) === 'booked');
    if (bookedSeats.length > 0) {
      return res.status(400).json({
        message: `Seats ${bookedSeats.join(', ')} are already booked`,
        success: false,
        bookedSeats // Return the booked seats
      });
    }

    // Create and save ticket
    const newTicket = new TicketModel({
      userId,
      eventId,
      seats,
      paymentDetails
    });
    const savedTicket = await newTicket.save();

    // Update event seatMap
    
    seats.forEach(seat => {
        event.seatMap.set(seat, 'booked');
      });
    
    await event.save();
    

    res.status(201).json({
      message: 'Ticket booked successfully',
      success: true,
      ticket: savedTicket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not book ticket', success: false });
  }
};

export const cancelTicket = async (req, res) => {
    try {
      const { bookingId} = req.body;
      
      const userId = req.id;
  
      if (!bookingId || !userId) {
        return res.status(400).json({ message: 'Missing required fields', success: false });
      }
  
      // Find and delete the ticket
      const ticket = await TicketModel.findOne({ _id: bookingId, userId });
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found or does not belong to user', success: false });
      }
  
      // Find the event and update the seatMap
      const event = await EventModel.findById(ticket.eventId);
      if (!event) {
        return res.status(404).json({ message: 'Event not found', success: false });
      }
  
      ticket.seats.forEach(seat => {
        event.seatMap.set(seat, 'available');
      });
      
      await event.save();
  
      await TicketModel.deleteOne({ _id: bookingId });
  
      res.status(200).json({
        message: 'Ticket cancelled successfully',
        success: true
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, could not cancel ticket', success: false });
    }
  };

export const getBookedTickets = async(req, res)=>{
    const userId = req.id;
    
    const allTickets = await TicketModel.find({userId});

    res.status(200).json({
        allTickets,
        success : true,
    })
}


export const getBookingDetails = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const userId = req.id;

    // Validate input
    if (!bookingId) {
      return res.status(400).json({ message: 'Booking ID is required', success: false });
    }

    // Find ticket by ID
    const ticket = await TicketModel.findById(bookingId).populate({
        path : 'eventId',
    }).populate({
        path : 'userId',
        select: '-password'
    });
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found', success: false });
    }

    res.status(200).json({
      message: 'Booking details retrieved successfully',
      success: true,
      ticket
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not retrieve booking details', success: false });
  }
};