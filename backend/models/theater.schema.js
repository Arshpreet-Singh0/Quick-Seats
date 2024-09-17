import mongoose, { Schema } from 'mongoose';

// Define the Seat Schema
const SeatSchema = new Schema({
    row: {
        type: String,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },
    seatType: { 
        type: String, required: true 
    },
    booked: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: true
    }
});


const auditoriumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    theater : {
        type : Schema.Types.ObjectId,
        ref : 'Theater',
        required : true,
    },
    seats: [SeatSchema],
  });

export const Auditorium = mongoose.model("Auditorium", auditoriumSchema);


const TheaterSchema = new Schema({
    theaterName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    created_by : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
});

const Theater = mongoose.model('Theater', TheaterSchema);

export default Theater;


const showSchema = new mongoose.Schema({
    movie: { type: Schema.Types.ObjectId, ref : 'Movie', required: true },
    time: { type: String, required: true },
    auditorium : {
        type : Schema.Types.ObjectId,
        ref : 'Auditorium',
        required : true,
    },
    theater: {
      type: Schema.Types.ObjectId,
      ref: "Theater",
      required: true,
    },
    seating: [{
        row: { type: String, required: true },
        seatNumber: { type: Number, required: true },
        seatType: { type: String, required: true },
        booked: { type: Boolean, default: false },  // Specific to this showtime
        price: { type: Number, required: true }
      }]
    
  });

export const Show = mongoose.model("Show", showSchema);
