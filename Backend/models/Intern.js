const mongoose = require('mongoose');

const InternSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  portfolio: { type: String },
  resume: { type: String, required: true },
  coverLetter: { type: String, required: true }
});

module.exports = mongoose.model('Intern', InternSchema);