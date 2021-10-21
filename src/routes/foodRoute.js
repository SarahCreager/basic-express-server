'use strict';

const { food } = require('../models')


// get all food
const getAllFood = async (req, res) => {
  let foodData = await food.findAll();
  res.send(foodData);
}

// get one food item using an id path
const getAFood = async (req, res) => {
  let oneFoodItem = await food.findAll({
    attributes: ['id'],
  })
  res.send(oneFoodItem);
}

// create a new food in the food table
const addFood = async (req, res) => {

}

// update food 
const updateFood = async (req, res) => {

}

// delete 
const deleteFood = async (req, res) => {

}

module.exports = {
  getAllFood,
  getAFood,
  addFood,
  updateFood,
  deleteFood,
};