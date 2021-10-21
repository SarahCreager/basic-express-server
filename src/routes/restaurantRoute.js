'use strict';

const { rest } = require('../models')


// get all restaurants
const getAllRest = async (req, res) => {
  let restData = await rest.findAll();
  res.send(restData);
}

// get one food item using an id path
const getARest = async (req, res) => {
  let oneRest = await rest.findAll({
    attributes: ['id'],
  })
  res.send(oneRest);
}

// create a new food in the food table
const addRest = async (req, res) => {

}

// update food 
const updateRest = async (req, res) => {

}

// delete 
const deleteRest = async (req, res) => {

}

module.exports = {
  getAllRest,
  getARest,
  addRest,
  updateRest,
  deleteRest,
};