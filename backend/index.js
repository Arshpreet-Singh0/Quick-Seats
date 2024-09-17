import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
// import cluster from 'cluster'
// import os from 'os'
// const cpu = os.cpus().length;
// console.log(cpu);

import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import theaterRouter from './routes/theater.route.js'
import movieRouter from './routes/movie.route.js'
import ticketRouter from './routes/ticket.route.js'
import audisRouter from './routes/auditorium.route.js'
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
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOption));
  
app.options('*', cors(corsOption));  // Allow preflight requests

app.use('/api/v1/user',userRouter);
app.use('/api/v1/theater', theaterRouter);
app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/ticket', ticketRouter);
app.use('/api/v1/auditoriums', audisRouter);


app.listen(PORT, ()=>{
    console.log(`App is listening to port ${PORT}`);
})