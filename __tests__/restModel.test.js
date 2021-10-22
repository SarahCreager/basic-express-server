'use strict';

const { db, rest } = require('../src/models');
const supertest = require('supertest');
const app = require('../src/server.js');
const request = supertest(app.app);

beforeAll(async () => {
  //make sure that tables exist and creates tables if they do not exist 
  await db.sync();
});

// removes side effects from test
afterAll(async () => {
  // drops all table rows within our database instance
  await db.drop();
});

describe('Testing /restaurant routes', () => {
  it('Should be able to create a new restaurant', async () => {
    const body = {name: 'Contos', favoriteDish: 'Blush Penne Pasta',location: 'Lake Stevens'};

    const response = await request.post('/restaurant').send(body);
    expect(response.statusCode).toBe(201);
  });

  it('Should retrieve all restaurants', async () => {
    const body1 = {name: 'Ba Bar', favoriteDish: 'Phở Gà', location: 'Seattle'};
    const body2 = {name: 'Tipsy Cow', favoriteDish: 'Black Magic',location: 'Redmond'};
    const body3 = {name: 'Dukes Seafood', favoriteDish: 'Crab Cakes',location: 'Bellevue'};

    await request.post('/restaurant').send(body1);
    await request.post('/restaurant').send(body2);
    await request.post('/restaurant').send(body3);

    const response = await request.get('/restaurant');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4);
  });

  it('Should retrieve a specific restaurant', async () => {
    let response = await request.get('/restaurant/1');
    expect(response.statusCode).toBe(200);
    response = JSON.parse(response.res.text);
    
    expect(response.id).toBe(1);
    expect(response.name).toBe('Contos');
    expect(response.favoriteDish).toBe('Blush Penne Pasta');
    expect(response.location).toBe('Lake Stevens');
  })

  it('Should update a restaurant', async () => {
    let response = await request.get('/restaurant/1');
    response = JSON.parse(response.res.text);
    expect(response.id).toBe(1);

    const body = {name: 'Contos Pizza and Pasta', favoriteDish: 'Rigatoni Marsala',location: 'My Hometown'};

    await request.put('/restaurant/1').send(body);
    let updatedRest = await request.get('/restaurant/1');
    expect(updatedRest.statusCode).toBe(200);
    
    updatedRest = JSON.parse(updatedRest.res.text);

    expect(updatedRest.id).toBe(1);
    expect(updatedRest.name).toBe('Contos Pizza and Pasta');
    expect(updatedRest.favoriteDish).toBe('Rigatoni Marsala');
    expect(updatedRest.location).toBe('My Hometown');

  })

  it('Should delete a Restaurant item', async () => {
    
    let response = await request.delete('/restaurant/1');
    response = JSON.parse(response.res.text)
    expect(response).toStrictEqual({});
  });

});