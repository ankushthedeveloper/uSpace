import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'; 
import connectToMongo from './db/connectToMongo.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from 'cookie-parser';
import usersRoutes from './routes/user.routes.js';

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth',authRoutes) 
app.use('/api/message',messageRoutes)
app.use('/api/users',usersRoutes)
app.listen(process.env.PORT,()=>{
    connectToMongo();
  
    console.log(`listening on port http://localhost:${process.env.PORT}`)
});