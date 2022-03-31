const express = require('express');
const router = express.Router();
const PCBuild = require('../models/pcBuild');

router.get('/', async (req, res) => {
  try {
    const pcBuilds = await PCBuild.find();
    res.send({
      success: true,
      data: pcBuilds
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const newPCBuild = await PCBuild.create(req.body);
    res.send({
      success: true,
      data: newPCBuild
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const pcBuild = await PCBuild.findById(`${req.params.id}`);
    if(!pcBuild){
      throw new Error("No item by that id here!");
    }
    res.send({
      success: true,
      data: pcBuild
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const pcBuild = await PCBuild.findByIdAndDelete(`${req.params.id}`);
    res.send({
      success: true,
      data: pcBuild
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const pcBuild = await PCBuild.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send({
      success: true,
      data: pcBuild
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

module.exports = router;