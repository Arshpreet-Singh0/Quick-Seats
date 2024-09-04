import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import eventRouter from './routes/event.route.js';
import ticketRouter from './routes/ticket.route.js'
import cors from 'cors';

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('connected to db');
    
})
.catch((err)=>{
    console.log(err);
    
})
app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(cookieParser());
const corsOption = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
  
app.options('*', cors(corsOption));  // Allow preflight requests

app.use('/api/v1/user',userRouter);
app.use('/api/v1/event', eventRouter);
app.use('/api/v1/ticket',ticketRouter);


app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`);
})