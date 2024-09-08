import mongoose, { Schema } from 'mongoose';

// Define the Seat Schema
const SeatSchema = new Schema({
    seatRow: {
        type: String,
        required: true
    },
    seatNumber: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true
    }
}, { _id: false });

const AuditoriumSchema = new Schema({
    audiName: {
        type: String,
        required: true
    },
    seats: [SeatSchema] // Embedding Seat Schema here
});

// Define the Theater Schema
const TheaterSchema = new Schema({
    theaterName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    audis: [AuditoriumSchema] // Embedding Auditorium Schema
});

const Theater = mongoose.model('Theater', TheaterSchema);

export default Theater;

const MovieSchema = new mongoose.Schema({
    theater : {
        type : Schema.Types.ObjectId,
        ref : 'Theater',
    },
    movieName: {
        type: String,
        required: true,
        trim: true 
    },
    audi : {
        type : String,
        required : true,
    },
    language: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    runtime: {
        type: Number, 
        required: true
    },
    cast: [{
        type: String 
    }],
    description: {
        type: String
    },
    rating: {
        type: Number, 
        min: 0,
        max: 10
    },
    available: {
        type: Boolean,
        default: true 
    },
    images : [{
        type : String,
    }]
})

export const Movie = mongoose.model("Movie", MovieSchema);