'use strict';


const { food } = require('../models')

///bring in express router 
const express = require('express');
const router = express.Router();


// get all food
const getAllFood = async (req, res) => {
  try {
    let foodData = await food.findAll();
    // will send 200 automatically without sending status
    res.status(200).send(foodData);
  } catch (error) {
    // next(e); write middleware to handle errors
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
    const destroyedFood = await food.destroy(foodItem);

    res.send(destroyedFood);
  } catch (error) {
    res.send(error);
  }
}

// routes
router.get('/', getAllFood)
router.get('/:id', getAFood);
router.post('/', addFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

module.exports = router;