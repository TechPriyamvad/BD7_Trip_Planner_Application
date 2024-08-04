import { generateHotelsData } from '../services/hotel_service.js';

export const hotelController = (req, res) => {
  const { city } = req.query;
  return res.json(generateHotelsData(city.toLowerCase(), req.hotelsData));
};
