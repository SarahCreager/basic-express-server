'use strict';

const { db, food } = require('../src/models');

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

    let newFood = await food.create({
      name: 'Blush Penne Pasta',
      description: 'Penne Pasta made with meat sauce, fresh cream and topped with parmesan',
    });

    console.log(newFood);
    expect(newFood.id).toBe(1);
    expect(newFood.name).toBe('Blush Penne Pasta');
  });
});