import mongoose, {Schema} from "mongoose";

const TicketSchema = new mongoose.Schema({
  user: {
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
  seats: [{
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
  },paymentDetails: {
    type: new Schema({
      transactionId: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      method: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      }
    }, { _id: false }),
    required: false, 
  }
}, { timestamps: true });

export const MovieTicket = mongoose.model('MovieTicket', TicketSchema);