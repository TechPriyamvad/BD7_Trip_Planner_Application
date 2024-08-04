import { generateSitesData } from '../services/site_service.js';

export const siteController = (req, res) => {
  const { city } = req.query;
  return res.json(generateSitesData(city.toLowerCase(), req.sitesData));
};
