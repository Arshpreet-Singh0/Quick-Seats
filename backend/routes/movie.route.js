import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createMovie, getAllMovies, getMovieByname, updateMovie } from "../controllers/movie.js";


const router = express.Router();

router.route("/create").post(createMovie);

router.route('/:id/update').patch(updateMovie);

router.route('/get').get(getAllMovies);

router.route('/get/:name').get(getMovieByname);

export default router