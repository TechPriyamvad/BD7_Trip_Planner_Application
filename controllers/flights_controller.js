import { generateFlightsData } from '../services/flights_service.js';

export const flightsController = (req, res) => {
  const { origin, destination } = req.query;
  return res.json(
    generateFlightsData(
      origin.toLowerCase(),
      destination.toLowerCase(),
      req.flightsData
    )
  );
};
