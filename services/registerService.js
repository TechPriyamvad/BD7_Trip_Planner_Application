import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export const generateCredentials = () => {
  const clientId = uuidv4();
  const clientKey = uuidv4();
  const userCredentials = {
    client_id: clientId,
    client_key: clientKey,
  };
  storeCrdentials(userCredentials);
  return userCredentials;
};

const storeCrdentials = (credentials) => {
  fs.writeFileSync(
    'assets/credentials.json',
    JSON.stringify(credentials, null, 2)
  );
};
