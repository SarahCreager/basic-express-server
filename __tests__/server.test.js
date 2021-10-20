'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(app.app);

describe('Testing our Server', () => {
  
  it('Should respond with a name on GET to /person', async () => {
    const response = await request.get('/person?name=Sarah');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Sarah');
  })

  it('Should respond with 500 if no name on GET to /person', async () => {
    const response = await request.get('/person')

    expect(response.status).toBe(500);
    expect(response.query).toBe(undefined);
  })

  it('Should respond with 404 if bad route on GET', async () => {
    const response = await request.get('/peeerson');

    expect(response.status).toBe(404);
  })

  it('Should respond with 404 if bad method on GET', async () => {
    const response = await request.post('/person');

    expect(response.status).toBe(404);
  })
})