const express = require('express');
const router = express.Router();
const Founder = require('../models/Founder');

router.post('/', async (req, res) => {
  try {
    const newFounder = new Founder(req.body);
    await newFounder.save();
    res.status(201).json(newFounder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const founders = await Founder.find();
    res.status(200).json(founders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const founder = await Founder.findById(req.params.id);
    if (!founder) {
      return res.status(404).json({ message: 'Founder not found' });
    }
    res.status(200).json(founder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;