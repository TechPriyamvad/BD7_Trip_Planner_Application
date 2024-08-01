import express from 'express';
const router = express.Router();
import { registerController } from '../controllers/registerController.js';

router.post('/register',registerController)
export const registerRouter = router;
