'use strict';

module.exports = function (request, response, next) {
  console.log('Our 404 Error Handler');
  response.status(404).send('Not-Found')
  response.end();
}