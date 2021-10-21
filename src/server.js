'use strict';

const express = require('express');
const app = express();

const validator = require('./middleware/validator.js');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const foodRoutes = require('./routes/foodRoute');
const restRoutes = require('./routes/restaurantRoute');


// running logger for all routes in application
app.use(logger);
app.use(express.json());

// routes
app.get('/person', validator, (request, response)  => {
  let name = request.query;
  response.status(200);
  response.send(name);
});

// Food Routes
app.get('/food', foodRoutes.getAllFood)
app.get('/food/:id', foodRoutes.getAFood);
app.post('/food', foodRoutes.addFood);
app.put('/food/:id', foodRoutes.updateFood);
app.delete('/food/:id', foodRoutes.deleteFood);

// Restarant Routes 
app.get('/restaurant', restRoutes.getAllRest)
app.get('/restaurant/:id', restRoutes.getARest);
app.post('/restaurant', restRoutes.addRest);
app.put('/restaurant/:id', restRoutes.updateRest);
app.delete('/restaurant/:id', restRoutes.deleteRest);


// error middleware
app.use(error404Handler);
app.use(error500Handler);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 
  }
};
