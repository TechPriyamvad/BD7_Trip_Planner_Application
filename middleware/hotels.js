import { HOTELS_DATA_COUNT } from '../constants/hotels.js';
import { generateHotelsData } from '../utils/generate_hotels_data.js';

const hotelsData = generateHotelsData(HOTELS_DATA_COUNT);

export const hotelsDataMiddleware = (req, res, next) => {
  req.hotelsData = hotelsData;
  next();
};
