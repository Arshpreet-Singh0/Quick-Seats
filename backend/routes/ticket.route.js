import express from 'express';
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { bookTicket, cancelTicket, getBookedTickets, getTicketById } from '../controllers/ticket.js';

const router = express.Router();

router.route('/book/:id').post(isAuthenticated, bookTicket);

router.route('/:id/cancel').post(isAuthenticated, cancelTicket);

router.route('/get').get(isAuthenticated, getBookedTickets);

router.route('/get/:id').get(isAuthenticated, getTicketById);

export default router