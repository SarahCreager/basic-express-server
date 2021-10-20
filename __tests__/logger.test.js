'use strict';

const logger = require('../src/middleware/logger.js');

describe('Testing the logger middleware', () => {

  let request = {method: 'GET'};
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('Should log a method', () => {
    // use logger
    logger(request, response, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();
  })
})