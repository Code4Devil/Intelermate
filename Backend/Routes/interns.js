const express = require('express');
const router = express.Router();
const multer = require('multer');
const Intern = require('../models/Intern');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, position, portfolio, coverLetter } = req.body;
    const resumePath = req.file.path;

    if (!firstName || !lastName || !email || !phone || !position || !resumePath || !coverLetter) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newIntern = new Intern({
      firstName,
      lastName,
      email,
      phone,
      position,
      portfolio,
      resume: resumePath,
      coverLetter
    });

    await newIntern.save();
    res.status(201).json(newIntern);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

module.exports = router;