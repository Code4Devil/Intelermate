import React, { useState } from 'react';
import axios from 'axios';

const PostInternship = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    founderName: '',
    email: '',
    phone: '',
    internshipRole: '',
    duration: '',
    stipend: '',
    skills: '',
    jobDescription: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/founders`, formData);
        if (response.status === 201) {
          alert('Form submitted successfully!');
          setFormData({
            companyName: '',
            founderName: '',
            email: '',
            phone: '',
            internshipRole: '',
            duration: '',
            stipend: '',
            skills: '',
            jobDescription: ''
          });
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <section id="internshipForm" className="bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Post an Internship</h2>
          <p className="text-lg text-neutral-400">Provide details about the internship opportunity</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="companyName">Company Name*</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.companyName ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="founderName">Founder Name*</label>
              <input
                type="text"
                id="founderName"
                name="founderName"
                value={formData.founderName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.founderName ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.founderName && <p className="text-red-500 text-sm mt-1">{errors.founderName}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="internshipRole">Internship Role*</label>
              <input
                type="text"
                id="internshipRole"
                name="internshipRole"
                value={formData.internshipRole}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.internshipRole ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.internshipRole && <p className="text-red-500 text-sm mt-1">{errors.internshipRole}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="duration">Duration*</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.duration ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="stipend">Stipend*</label>
              <input
                type="text"
                id="stipend"
                name="stipend"
                value={formData.stipend}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.stipend ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.stipend && <p className="text-red-500 text-sm mt-1">{errors.stipend}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="skills">Skills*</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.skills ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              />
              {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="jobDescription">Job Description*</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${errors.jobDescription ? 'border-red-500' : 'border-neutral-300'} rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600`}
                required
              ></textarea>
              {errors.jobDescription && <p className="text-red-500 text-sm mt-1">{errors.jobDescription}</p>}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Submit Internship
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostInternship;