import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InternPage from './InternPage';

const Thirdpage = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/intern');
  };

  const handlelearnmore = () => {
    navigate('/Founder');
  }

  return (
    <section id="services" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Our Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Students */}
          <div className="bg-neutral-800 rounded-xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-white mb-6">Student, Need Internship?</h3>
            <div className="space-y-4 mb-8">
              <div className="text-gray-300 flex flex-col gap-6">
                <h4 className="text-xl font-semibold mb-4">Available Roles:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Frontend Developer
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Backend Developer
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Data Scientist
                  </li>
                </ul>

                <div>
                  <button onClick={handleApplyNow} className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* For Startups */}
          <div className="bg-neutral-800 rounded-xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInRight">
            <h3 className="text-2xl font-bold text-white mb-6">Startup, Need Talent?</h3>
            <div className="space-y-4 mb-8">
              <div className="text-gray-300 flex flex-col gap-6">
                <h4 className="text-xl font-semibold mb-4">Our Services:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Talent Acquisition
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Internship Programs
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Training & Development
                  </li>
                </ul>

                <div>
                  <button onClick={() => navigate('/founder')} className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thirdpage;