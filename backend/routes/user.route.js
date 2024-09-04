import express from "express";
import { login, logout, signUp, updatePassword } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/signup").post(signUp);

router.route("/login").post(login);

router.route("/logout").post(isAuthenticated,logout);

router.route("/changepassword").post(isAuthenticated,updatePassword);

export default router