import express from 'express'
const router = express.Router();
import { isAuthenticated } from '../middlewares/isAuthenticated.js'
import { createShow, getShowbyId, getShows } from '../controllers/show.js';

router.route('/createshow').post(isAuthenticated, createShow);

router.route('/getshow/:id').get(getShowbyId);

router.route('/getshows').get(getShows);

export default router