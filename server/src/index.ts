import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/index.js';
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

for (const route of routes) {

    const {path, methods, handler} = route;

    for (const method of methods) { 
        (router as any)[method.toLowerCase()](path, handler); 
    }
}

app.use('/api', router);

app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`)); 