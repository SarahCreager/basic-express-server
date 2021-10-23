'use strict';

// const app = require('./src/server.js');

const { db } = require('./src/models');
const { start } = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

db.sync().then(() =>{
  start(PORT);
});





