import express from 'express'
import { bookTicket, cancelTicket, getBookedTickets, getBookingDetails } from '../controllers/ticketBooking.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
const router = express.Router();


router.route('/book').post(isAuthenticated,bookTicket);

router.route('/cancel').post(isAuthenticated,cancelTicket);

router.route('/get').get(isAuthenticated, getBookedTickets);

router.route('/get/:bookingId').get(isAuthenticated ,getBookingDetails);

export default router;
