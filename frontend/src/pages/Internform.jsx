import React, { useState } from 'react';
import axios from 'axios';

const Internform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    portfolio: '',
    resume: null,
    coverLetter: ''
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('portfolio', formData.portfolio);
    data.append('resume', formData.resume);
    data.append('coverLetter', formData.coverLetter);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/interns`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        alert('Thank you for your application! We will get back to you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          portfolio: '',
          resume: null,
          coverLetter: ''
        });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please refresh the page and try again or reopen the website.');
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  return (
    <div>
      <section id="applicationForm" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="el-t7gliw56">
          <div className="text-center mb-12 animate__animated animate__fadeIn" id="el-ymfkp7i4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="el-pv2avgjv">Apply Now</h2>
            <p className="text-lg text-neutral-600" id="el-kksf750k">Take the first step towards your tech career</p>
          </div>

          <form id="internshipForm" className="bg-neutral-50 p-8 rounded-xl shadow-lg animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6" id="el-lsdgovs6">
              <div className="col-span-2 md:col-span-1" id="el-sbxj0i6d">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="firstName" id="el-tzl1kbtg">First Name*</label>
                <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="John" value={formData.firstName} onChange={handleChange} />
              </div>

              <div className="col-span-2 md:col-span-1" id="el-zllnbu8t">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="lastName" id="el-mv7em0u5">Last Name*</label>
                <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
              </div>

              <div className="col-span-2" id="el-66lfnxom">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email" id="el-03q5jz3f">Email Address*</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="johndoe@example.com" value={formData.email} onChange={handleChange} />
              </div>

              <div className="col-span-2" id="el-azazb0cz">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="phone" id="el-pnuphzcs">Phone Number*</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="+1 (234) 567-8900" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="col-span-2" id="el-qdk51u93">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="position" id="el-oohkuspt">Position Applied For*</label>
                <select id="position" name="position" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" value={formData.position} onChange={handleChange}>
                  <option value="">Select a position</option>
                  <option value="frontend">Frontend Developer</option>
                  <option value="backend">Backend Developer</option>
                  <option value="fullstack">Full Stack Developer</option>
                  <option value="designer">UI/UX Designer</option>
                </select>
              </div>

              <div className="col-span-2" id="el-dao1ecy9">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="portfolio" id="el-qr3uf7ja">Portfolio URL</label>
                <input type="url" id="portfolio" name="portfolio" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="https://yourportfolio.com" value={formData.portfolio} onChange={handleChange} />
              </div>

              <div className="col-span-2" id="el-v230kya1">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="resume" id="el-ieub2iht">Resume/CV Upload*</label>
                <input type="file" id="resume" name="resume" accept=".pdf" required className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" onChange={handleFileChange} />
                <p className="mt-1 text-sm text-neutral-500" id="el-yyrahqdx">Accepted formats: PDF (Max 5MB)</p>
              </div>

              <div className="col-span-2" id="el-w795u7mv">
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="coverLetter" id="el-8j6p1qig">Why should we hire you?*</label>
                <textarea id="coverLetter" name="coverLetter" required rows="4" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="Tell us about your motivation and qualifications..." value={formData.coverLetter} onChange={handleChange}></textarea>
              </div>

              <div className="col-span-2" id="el-a60kbt83">
                <label className="flex items-center" id="el-w7xpmjeu">
                  <input type="checkbox" required className="rounded border-neutral-300 text-blue-600 focus:ring-blue-600" id="el-hko6k37l" />
                  <span className="ml-2 text-sm text-neutral-600" id="el-qm27urmo">I agree to the <a href="#" className="text-blue-600 hover:underline" id="el-p6vpwj2z">Terms &amp; Conditions</a> and <a href="#" className="text-blue-600 hover:underline" id="el-r9edi20t">Privacy Policy</a>*</span>
                </label>
              </div>
            </div>

            <div className="mt-8 text-center" id="el-lik9zh5s">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite" id="el-avdtbadv" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Internform;