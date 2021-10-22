'use strict';

const { rest } = require('../models')

///bring in express router 
const express = require('express');
const router = express.Router();



// get all restaurants
const getAllRest = async (req, res) => {
  try {
    let restData = await rest.findAll();
    res.status(200).send(restData);
  } catch (error) {
    res.send(error);
  }
}

// get one food item using an id path
const getARest = async (req, res) => {
  try {
    let restItem = await rest.findByPk(req.params.id);
    if (!restItem) {
      return res.status(404);
    }
    res.status(200).send(restItem);
  } catch (error) {
    res.send(error);
  }
}

// create a new food in the food table
const addRest = async (req, res) => {
  try {
    let newRest = await rest.create({
      name: req.body.name,
      favoriteDish: req.body.favoriteDish,
      location:req.body.location,
    });
    res.status(201).send(newRest);
  } catch (error) {
    res.send(error);
  }
}

// update food 
const updateRest = async (req, res) => {
  try{
    let restItem = await rest.findByPk(req.params.id);
    restItem.name = req.body.name;
    restItem.favoriteDish = req.body.favoriteDish;
    restItem.location = req.body.location;
    restItem.save();

    res.status(200).send(restItem);
  } catch (error){
    res.send(error);
  }
}

// delete 
const deleteRest = async (req, res) => {
  try{
    const restItem = await rest.findByPk(req.params.id);
    const destroyedRest = await rest.destroy(restItem);

    res.send(destroyedRest);
  } catch (error) {
    res.send(error);
  }
}

// routes
router.get('/', getAllRest)
router.get('/:id', getARest);
router.post('/', addRest);
router.put('/:id', updateRest);
router.delete('/:id', deleteRest);

module.exports = router;