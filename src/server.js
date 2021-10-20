'use strict';

const express = require('express');
const app = express();

const validator = require('./middleware/validator.js');
const error404Handler = require('./error-handlers/404.js');
const error500Handler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js')

// running logger for all routes in application
app.use(logger);
app.use(express.json());

app.get('/person', validator, (request, response)  => {
  // TODO: response.status(200)
  let name = request.query.name;
  response.send(name);
  // TODO: send back an object
});


app.use(error404Handler);
app.use(error500Handler);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) 
  }
};
