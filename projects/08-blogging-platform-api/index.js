import express from 'express';
import postsRouter from './routes/posts.js';
import { connectDB } from './db.js';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/posts', postsRouter);

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
});
