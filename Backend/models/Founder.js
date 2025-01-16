const mongoose = require('mongoose');

const FounderSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  founderName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  internshipRole: { type: String, required: true },
  duration: { type: String, required: true },
  stipend: { type: String, required: true },
  skills: { type: [String], required: true },
  jobDescription: { type: String, required: true },
  activeInterns: { type: [String], required: true }
});

module.exports = mongoose.model('Founder', FounderSchema);
