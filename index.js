import express from 'express';
import { tripPlanner } from './routers/trip_planner.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Trip planner application');
});

app.use('/api', tripPlanner);

const port = process.env.PORT | 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
