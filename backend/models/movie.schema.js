import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true 
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
        type: String
    },
    runtime: {
        type: Number, 
        required: true
    },
    cast: [{
        name: { type: String, required: true },
        image: { type: String, required: true } 
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
    image : {
        type : String,
    },
    about : {
        type : String,
        required : true,
    },
})

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;