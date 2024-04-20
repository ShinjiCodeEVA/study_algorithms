import express from 'express'
import dotenv from 'dotenv'
import problemsRouter from './routes/index.js'

dotenv.config();
const app = express();

app.use('/api', problemsRouter);

app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`)); 