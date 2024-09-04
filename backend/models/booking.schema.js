import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    eventName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    seatMap: [
      {
        seatId: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ['available', 'booked', 'reserved'],
          default: 'available',
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  }, { timestamps: true });
  
export const BookingModel = mongoose.model('Event', eventSchema);
  