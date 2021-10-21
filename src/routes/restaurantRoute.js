'use strict';

const { rest } = require('../models')


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
    const destroyedRest = await restItem.destroy();

    res.send(destroyedRest);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getAllRest,
  getARest,
  addRest,
  updateRest,
  deleteRest,
};