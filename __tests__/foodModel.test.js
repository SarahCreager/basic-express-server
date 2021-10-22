'use strict';

const { db, food } = require('../src/models');
const supertest = require('supertest');
const app = require('../src/server.js');
const request = supertest(app.app);

// beforeEach
beforeAll(async () => {
  //make sure that tables exist and creates tables if they do not exist 
  await db.sync();
});

// removes side effects from test
afterAll(async () => {
  // drops all table rows within our database instance
  await db.drop();
});

describe('Testing our sequelize food model', () => {

  it('Should be able to create a new food item', async () => {
    const body = {name: 'Blush Penne Pasta', description: 'Penne with creamy red sauce'};

    const response = await request.post('/food').send(body);
    expect(response.statusCode).toBe(201);
  });

  it('Should retrieve all food items', async () => {
    const body1 = {name: 'Phở Gà', description: 'yummy Vietnamese dishe'};
    const body2 = {name: 'Crab Cakes', description: 'full of lots of crab'};
    const body3 = {name: 'Tacos', description: 'need I say more'};

    await request.post('/food').send(body1);
    await request.post('/food').send(body2);
    await request.post('/food').send(body3);

    const response = await request.get('/food');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(4);
  });

  it('Should retrieve a specific food item', async () => {
    let response = await request.get('/food/1');
    expect(response.statusCode).toBe(200);
    response = JSON.parse(response.res.text);
    
    expect(response.id).toBe(1);
    expect(response.name).toBe('Blush Penne Pasta');
    expect(response.description).toBe('Penne with creamy red sauce');
  })

  it('Should update a food item', async () => {
    let response = await request.get('/food/1');
    response = JSON.parse(response.res.text);
    expect(response.id).toBe(1);

    const body = {name: 'Veggie Sub', description: 'Sandwich with veggies, cheese, mayo, and all the good stuff'};

    await request.put('/food/1').send(body);
    let updatedRest = await request.get('/food/1');
    expect(updatedRest.statusCode).toBe(200);
    
    updatedRest = JSON.parse(updatedRest.res.text);

    expect(updatedRest.id).toBe(1);
    expect(updatedRest.name).toBe('Veggie Sub');
    expect(updatedRest.description).toBe('Sandwich with veggies, cheese, mayo, and all the good stuff');

  })

  it('Should delete a food item', async () => {
    
    let response = await request.delete('/food/1');
    response = JSON.parse(response.res.text)
    expect(response).toStrictEqual({});
  });
});