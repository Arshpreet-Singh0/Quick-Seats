import mongoose, { Schema } from 'mongoose';


const SeatSchema = new Schema({
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
    },
    category: {
        type: String,
        enum: ['Regular', 'Premium'],
        default: 'Regular'
    }
}, { _id: false }); 

const BusSchema = new Schema({
    busNumber: {
        type: String,
        required: true,
        unique: true
    },
    operator: {
        type: String,
        required: true
    },
    route: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
    seats: [SeatSchema], // Embedding Seat Schema here
    
});

const Bus = mongoose.model('Bus', BusSchema);

export default Bus;
