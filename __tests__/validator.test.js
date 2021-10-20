'use strict';

const validator = require('../src/middleware/validator.js');

describe('Testing the validator middleware', () => {

  let request = {query: { name: 'Sarah' }}
  let response = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('Should validate if query string has name property', () => {
    // use logger
    validator(request, response, next);

    expect(request.query.name).toBe('Sarah');
    expect(next).toHaveBeenCalled();
  })
})
