import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
  movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie'
  },
  showtime: {
      type: String,
      required: true
  },
  seat: [{
      type: String,
      required: true
  }],
  price: {
      type: Number,
      required: true
  },
  status: {
      type: String,
      enum: ['Booked', 'Cancelled', 'Pending'],
      default: 'Pending'
  },
  paymentDetails: {
      transactionId: {
        type: String, 
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      method: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      }
    },
    
},{timestamps : true});

export const MovieTicket = mongoose.model('MovieTicket', TicketSchema);