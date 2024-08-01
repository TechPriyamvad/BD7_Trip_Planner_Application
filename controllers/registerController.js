import { generateCredentials } from '../services/registerService.js';

export const registerController = (req, res) =>
  res.json(generateCredentials(res));
