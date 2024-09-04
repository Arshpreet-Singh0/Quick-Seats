import express from 'express';
import { initiatePayment, verifyPayment } from '../controllers/paymentController.js';

const router = express.Router();

router.route('/initiate').post(initiatePayment);

router.route('/verify').post(verifyPayment);

export default router;