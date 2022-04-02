'use strict';
const express = require('express');
const rootRouter = require('./app/routers');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());

//import router
app.use(rootRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = {
    error: 404,
    message: 'not_found',
    status: 400,
    data: null
  };
  next(error);
});

// error handler
app.use((err, req, res, next) => {

  if (err.name === 'SequelizeValidationError')
    return res.json({
      error: err.error,
      message: err.errors.map(e => e.message),
      status: 400,
      data: null
    });
  return res.json({
    error: err.error,
    message: err.message,
    status: 400,
    data: null
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});