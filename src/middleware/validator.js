'use strict';


module.exports = function (request, response, next) {
  if (request.query.name) {
    next();
  } else {
    // this does not "force" a 500 error, but it calls next with a parameter which triggers our 500 error. 
    next('No name');
  }
};


