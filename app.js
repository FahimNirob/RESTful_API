const express = require('express');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

//Middleware
app.use(express.json());

//Route
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

//export app
module.exports = app;
