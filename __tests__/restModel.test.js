'use strict';

const { db, rest } = require('../src/models');

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

    let newRest = await rest.create({
      name: 'Contos',
      favoriteDish: 'Blush Penne Pasta',
      location: 'Lake Stevens',
    });

    console.log(newRest);
    expect(newRest.id).toBe(1);
    expect(newRest.name).toBe('Contos');
  });
});