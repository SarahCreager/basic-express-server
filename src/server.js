'use strict'

const express = require('express');
const app = express();

const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3001;



module.exports = {
  app,
  start: app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)),
};
