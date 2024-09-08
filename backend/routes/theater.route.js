import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import router from "./user.route.js";
import { createTheater, getTheaters, updateTheater } from "../controllers/theater.js";

    router.route('/create').post(isAuthenticated, createTheater);

    router.route('/get').get(isAuthenticated, getTheaters);
    
    router.route('/:id/update').patch(isAuthenticated,updateTheater);

export default router