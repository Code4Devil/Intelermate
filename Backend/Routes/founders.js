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

module.exports = router;
