import express from 'express'
import { isAuthenticated } from '../middlewares/isAuthenticated.js';
import { createEvent, deleteEvent, getEventById, getEvents, update } from '../controllers/event.js';

const router = express.Router();

router.route('/create').post(isAuthenticated, createEvent);

router.route('/getevents').get(getEvents);

router.route('/getevent/:id').get(getEventById);

router.route('/update/:id').put(isAuthenticated,update);

router.route('/delete/:id').delete(isAuthenticated,deleteEvent);

export default router