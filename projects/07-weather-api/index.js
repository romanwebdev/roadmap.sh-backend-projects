import express from 'express';
import axios from 'axios';
import 'dotenv/config';
import { redisClient } from './reddis-client.js';
import { rateLimit } from 'express-rate-limit';

const TWELVE_HOURS_IN_SECONDS = 12 * 60 * 60;
const PORT = 3000;
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 20,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});

await redisClient.connect();

app.get('/weather/:city', limiter, async (req, res) => {
  try {
    const city = req.params.city.trim().toLowerCase();

    let cached = await redisClient.get(city);
    if (cached) return res.json(JSON.parse(cached || '{}'));

    const { data } = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.API_KEY}`
    );

    await redisClient.setEx(
      city,
      TWELVE_HOURS_IN_SECONDS,
      JSON.stringify(data)
    );

    res.json(data);
  } catch (err) {
    console.error(`Error: Status ${err.status} - ${err.response.data}`);
    res
      .status(err.status)
      .json({ message: err.response.data || 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
