import express from 'express'
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createAudi, deleteAudi, getAudiById, getAudis } from '../controllers/auditorium.js';

const router = express.Router();



router.post('/create',isAuthenticated,createAudi);


router.post('/get', isAuthenticated, getAudis);


router.get('/get/:id', isAuthenticated, getAudiById);


router.delete('/delete/:id',isAuthenticated, deleteAudi);

export default router
