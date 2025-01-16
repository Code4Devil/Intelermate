import React from 'react';

const GetinTouch = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <section id="contact" className="py-20 bg-neutral-900 w-full ">
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16 w-full">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Have questions? We're here to help and would love to hear from you.</p>
          </div>

          <div className="max-w-11/12 mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-neutral-800 p-8 rounded-xl shadow-xl animate__animated animate__fadeInLeft w-full md:w-11/12 mx-auto">
                <form id="contactForm" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input type="text" id="name" name="name" className="w-full md:w-11/12 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" placeholder="John Doe" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full md:w-11/12 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <select id="subject" name="subject" className="w-full md:w-11/12 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white">
                      <option value="internship">Looking for Internship</option>
                      <option value="hiring">Want to Hire Interns</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                    <textarea id="message" name="message" rows="4" className="w-full md:w-11/12 px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white" placeholder="How can we help you?" required></textarea>
                  </div>
                  
                  <button type="submit" className="w-full md:w-11/12 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate__animated animate__fadeInRight w-full md:w-11/12 mx-auto">
                <div className="bg-neutral-800 p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Phone</h4>
                        <p className="text-gray-300">+91 9255663330</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-600 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Email</h4>
                        <p className="text-gray-300">itsinnocentzero@gmail.com</p>
                      </div>
                    </div>

                    
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8 pt-8 border-t border-neutral-700">
                    <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/intelermate/?viewAsMember=true" className="bg-neutral-700 p-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                      </a>
                      <a href="https://www.instagram.com/intelermate.tech/" className="bg-neutral-700 p-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetinTouch;