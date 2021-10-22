'use strict';

require ('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');
const RestModel = require('./restaurant.js');

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';


// production database requires extra config
const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};


// instantiate our instance of sequelize  and pass in database url that allows us to actually connect to a running database or sqlite
const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const foodTable = FoodModel(sequelizeInstance, DataTypes);
const restTable = RestModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  food: foodTable,
  rest: restTable
}