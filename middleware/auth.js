import fs from 'fs';

const authMiddleware = (req, res, next) => {
  const storedCredentials = JSON.parse(
    fs.readFileSync('assets/credentials.json')
  );
  const { clientid, clientkey } = req.headers;
  if (
    clientid !== storedCredentials.client_id ||
    clientkey !== storedCredentials.client_key
  )
    return res
      .status(401)
      .json({ message: 'Invalid Client ID or Client Key.' });
  next();
};

export { authMiddleware };
