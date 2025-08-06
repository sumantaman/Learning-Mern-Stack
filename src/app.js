import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import dotenv from 'dotenv'
import productRoute from './routes/productRoute.js'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import dotenv from 'dotenv';
import { log } from 'console';
import databaseConnection from './config/database.js';
import logger from './middlewares/logger.js';
import auth from './middlewares/auth.js';
dotenv.config();

const app = express()
const port = process.env.PORT;

databaseConnection()

// middleware
app.use(bodyParser.json())
app.use(logger)


// routes
app.use(productRoute);
app.use(userRoute);
app.use(authRoute)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

