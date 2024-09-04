import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['Movie', 'Railway', 'Flight', 'Concert', 'Sports'],
    required: true,
  },
  venue: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  images : [{
    type : String,
  }],
  ticketPrice: {
    type: Number,
    required: true,
  },
  ticketsAvailable: {
    type: Number,
    required: true,
  },
  seatMap: {
    type: Map,
    of: String, // e.g., { "A1": "available", "A2": "booked" }
    default: {},
  },
  category: {
    type: String,
    required: true,
  },
  additionalDetails: {
    type: Map,
    of: String, // Stores dynamic details based on type (movie, flight, train, etc.)
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'UserModel'
  }
});

export const EventModel = mongoose.model('Event', EventSchema);

