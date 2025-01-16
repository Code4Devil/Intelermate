const express = require('express');
const router = express.Router();
const Intern = require('../models/Intern');

router.post('/', async (req, res) => {
  try {
    const newIntern = new Intern(req.body);
    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.status(200).json(intern);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const interns = await Intern.find();
    res.status(200).json(interns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;