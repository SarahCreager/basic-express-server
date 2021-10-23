'use strict';

const express =require('express');
const router = express.Router();
const { food, rest } = require('../models');

const Collection = require('../models/lib/Collection.js');

const modelMap = {
  food: new Collection(food),
  rest: new Collection(rest),
};

// middleware attaches the model to the req object so the routes can access it
router.use('/:model', (req, res, next) => {

  const model = modelMap[req.params.model];
  if (!model) {
    next('No model found')
  }
  req.model = model;
  console.log(req.model);
  next();
});

// get all
router.get('/:model', async (req, res, next) => {
  const model = req.model;
  let records = await model.read();
  res.send(records);
});

// get one
router.get('/:model/:id', async (req, res, next) => {
  const model = req.model;
  let record = await model.read(req.params.id);
  res.send(record);
});

// create new
router.post('/:model', async (req, res, next) => {
  const model = req.model;
  let newRecord = await model.create(req.body);
  res.status(201).send(newRecord);
});

// update
router.put('/:model/:id', async (req, res, next) => {
  const model = req.model;
  let record = await model.update(req.params.id, req.body);
  res.send(record);
});

// delete
router.delete('/:model/:id', async (req, res, next) => {
  const model = req.model;
  let record = await model.delete(req.params.id);
  console.log('record', record);
  res.sendStatus(200);
});


module.exports = router;