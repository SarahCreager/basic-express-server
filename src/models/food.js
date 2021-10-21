'use strict';

// defines a whole table and each column
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// this will use an incremented ID of type number, as the primary unless specified.

module.exports = Food;