'use strict';

const express = require('express');
const app = express();

const validator = require('./middleware/validator.js');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

//COMMENTED OUT
// const foodRouter = require('./routes/foodRoute');
// const restRouter = require('./routes/restaurantRoute');

const apiRouter = require('./routes/api.js')


// running logger for all routes in application
app.use(logger);
app.use(express.json());

// routes
app.get('/person', validator, (request, response)  => {
  let name = request.query;
  response.status(200);
  response.send(name);
});

// Routes
app.use('/api', apiRouter);
//COMMENTED OUT
// app.use('/food', foodRouter);
// app.use('/restaurant', restRouter);


// error middleware
app.use(error404Handler);
app.use(error500Handler);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 
  }
};
