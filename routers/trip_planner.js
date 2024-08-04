import express from 'express';
import { registerController } from '../controllers/registerController.js';
import { flightsController } from '../controllers/flights_controller.js';
import { flightsDataMiddleware } from '../middleware/flights.js';
import { authMiddleware } from '../middleware/auth.js';
import { errorGenerationMiddleware } from '../middleware/errorGeneration.js';
import { rateLimitingMiddleware } from '../middleware/rateLimiting.js';
import { hotelsDataMiddleware } from '../middleware/hotels.js';
import { hotelController } from '../controllers/hotel_controller.js';
import { siteController } from '../controllers/site_controller.js';
import { sitesDataMiddleware } from '../middleware/sites.js';

const router = express.Router();

router.post('/register', registerController);

router.get(
  '/flights',
  authMiddleware,
  rateLimitingMiddleware,
  errorGenerationMiddleware,
  flightsDataMiddleware,
  flightsController
);

router.get(
  '/hotels',
  authMiddleware,
  rateLimitingMiddleware,
  errorGenerationMiddleware,
  hotelsDataMiddleware,
  hotelController
);

router.get(
  '/sites',
  authMiddleware,
  rateLimitingMiddleware,
  errorGenerationMiddleware,
  sitesDataMiddleware,
  siteController
);

export const tripPlanner = router;
