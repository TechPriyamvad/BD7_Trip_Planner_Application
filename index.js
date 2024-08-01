import express from 'express';
import {registerRouter} from './routers/register.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Trip planner application');
});

app.use('/api',registerRouter);

const port = process.env.PORT | 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

