import { FLIGHTS_DATA_COUNT } from '../constants/flights.js';
import { generateFlightsData } from '../utils/generate_flights_data.js';

const flightsData = generateFlightsData(FLIGHTS_DATA_COUNT);

export const flightsDataMiddleware = (req, res, next) => {
  req.flightsData = flightsData;
  next();
};
