'use strict';

const app = require('./src/server.js');

const { db } = require('./model');
const { start } = require('./app');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

db.sync().then(() =>{
  start(PORT);
});





