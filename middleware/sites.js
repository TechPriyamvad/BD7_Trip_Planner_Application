import { SITES_DATA_COUNT } from '../constants/hotels.js';
import { generateSitesData } from '../utils/generate_sites_data.js';

const sitesData = generateSitesData(SITES_DATA_COUNT);

export const sitesDataMiddleware = (req, res, next) => {
  req.sitesData = sitesData;
  next();
};
