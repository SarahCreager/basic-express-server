'use strict';

// defines a whole table and each column
const Rest = (sequelize, DataTypes) => sequelize.define('Rest', {
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  favoriteDish:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  location:{
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// this will use an incremented ID of type number, as the primary unless specified.

module.exports = Rest;