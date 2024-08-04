export const errorGenerationMiddleware = (req, res, next) => {
  const { TEST_ERROR } = req.query;
  if (TEST_ERROR) {
    return res
      .status(500)
      .json({ error: 'Simulated error for testing purposes.' });
  }
  next();
};
