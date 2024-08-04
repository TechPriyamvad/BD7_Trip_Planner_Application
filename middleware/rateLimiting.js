export const rateLimitingMiddleware = (req, res, next) => {
  const { UNSUBSCRIBED } = req.query;
  if (UNSUBSCRIBED) {
    return res
      .status(500)
      .json({ error: 'Rate limit exceeded. Please try again later.' });
  }
  next();
};
