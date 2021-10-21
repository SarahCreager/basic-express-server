'use strict';

const { request } = require('express');
const { food } = require('../models')


// get all food
const getAllFood = async (req, res) => {
  try {
    let foodData = await food.findAll();
    res.status(200).send(foodData);
  } catch (error) {
    res.send(error);
  }
  
}

// get one food item using an id path
const getAFood = async (req, res) => {
  try {
    let foodItem = await food.findByPk(req.params.id);
    if (!foodItem) {
      return res.status(404);
    }
    res.status(200).send(foodItem);
  } catch (error) {
    res.send(error);
  }
}

// create a new food in the food table
const addFood = async (req, res) => {
  try {
    let newFood = await food.create({
      name: req.body.name,
      description: req.body.description,
    });
    res.status(201).send(newFood);
  } catch (error) {
    res.send(error);
  }
}

// update food 
const updateFood = async (req, res) => {
  try{
    let foodItem = await food.findByPk(req.params.id);
    foodItem.name = req.body.name;
    foodItem.description = req.body.description;
    foodItem.save();

    res.status(200).send(foodItem);
  } catch (error){
    res.send(error);
  }
}

// delete 
const deleteFood = async (req, res) => {
  try{
    const foodItem = await food.findByPk(req.params.id);
    const destroyedFood = await foodItem.destroy();

    res.send(destroyedFood);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAllFood,
  getAFood,
  addFood,
  updateFood,
  deleteFood,
};