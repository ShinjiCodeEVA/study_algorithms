import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import { config } from './config.js'
import solutionsRouter from './routes/algorithms.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/algorithms', solutionsRouter)
export let db;

const connectToDb = async () => {
    try {
        db = await mysql.createConnection(config.db)
        app.listen(3000, () => console.log('Server is running'))
    } catch(error) {
        console.log(error.message)  
    }
}

connectToDb()


