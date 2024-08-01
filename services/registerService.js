import { v4 as uuidv4 } from 'uuid';

export const generateCredentials = () => {
  const clientId = uuidv4();
  const clientKey = uuidv4();

  return {
    client_id: clientId,
    client_key: clientKey,
  };
};
