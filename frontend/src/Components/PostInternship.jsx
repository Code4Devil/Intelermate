import React from 'react';

const PostInternship = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('border-red-500');
      } else {
        field.classList.remove('border-red-500');
      }
    });

    if (isValid) {
      // Here you would typically send the form data to your server
      alert('Form submitted successfully!');
      e.target.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <section id="internshipForm" className="bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" id="el-2k5owmbr">
        <div className="text-center mb-12 animate__animated animate__fadeIn" id="el-4gvsnrnq">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" id="el-fwvlhlwx">Post Your Internship</h2>
          <p className="text-gray-300" id="el-n9jrmmdj">Fill out the form below to find your perfect intern</p>
        </div>

        <form id="founderForm" className="bg-white rounded-lg p-8 shadow-xl animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6" id="el-hn7uujw7">
            <div className="col-span-2 md:col-span-1" id="el-e20xti65">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="companyName" id="el-rmxda746">Company Name *</label>
              <input type="text" id="companyName" name="companyName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2 md:col-span-1" id="el-19s2njk1">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="founderName" id="el-wzdc1kep">Founder Name *</label>
              <input type="text" id="founderName" name="founderName" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2 md:col-span-1" id="el-wl9al66o">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="email" id="el-6roxuzem">Email *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2 md:col-span-1" id="el-clq7xsma">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="phone" id="el-x8jdbget">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2" id="el-dek1clmf">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="internshipRole" id="el-oqt1qnji">Internship Role *</label>
              <input type="text" id="internshipRole" name="internshipRole" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2" id="el-bkvjvy6x">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="description" id="el-3uspv4vq">Job Description *</label>
              <textarea id="description" name="description" rows="4" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
            </div>

            <div className="col-span-2 md:col-span-1" id="el-q6soi3b8">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="duration" id="el-gqqnerg2">Duration *</label>
              <select id="duration" name="duration" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="" id="el-itdasc54">Select Duration</option>
                <option value="1" id="el-ocly1fxs">1 Month</option>
                <option value="2" id="el-awrisldm">2 Months</option>
                <option value="3" id="el-p2bdlso1">3 Months</option>
                <option value="6" id="el-garg73c2">6 Months</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1" id="el-e0h0xggf">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="stipend" id="el-tqag855c">Stipend (INR/month) *</label>
              <input type="number" id="stipend" name="stipend" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>

            <div className="col-span-2" id="el-clokqr39">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="skills" id="el-2tuo051w">Required Skills *</label>
              <input type="text" id="skills" name="skills" required placeholder="e.g., Python, React, Marketing" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>

          <div className="mt-8 text-center" id="el-hthuj694">
            <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out animate__animated animate__pulse animate__infinite" id="el-u8f8xd2l">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PostInternship;