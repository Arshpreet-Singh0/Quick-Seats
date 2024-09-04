import mongoose from "mongoose";
import { EventModel } from "./event.model.js";

const ticketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
  seats: [{
    type: String, 
    required: true,
  }],
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

ticketSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export const TicketModel = mongoose.model('Ticket', ticketSchema);
