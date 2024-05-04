import express from 'express';
import userRouter from './routers/userRouter.js';
import formRouter from './routers/formRouter.js';

import connection from './connection.js';
import cors from 'cors';

import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static('images'));

app.use('/', userRouter);
app.use('/post', formRouter);

connection();
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
