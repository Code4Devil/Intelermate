import React from 'react';

const Fourthpage = () => {
  return (
    <div>
      <section id="explore" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4 animate__animated animate__fadeInUp">Explore Our Impact</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>

              {/* Timeline items */}
              <div className="space-y-20">
                {/* Item 1 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right animate__animated animate__fadeInLeft">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Student Success</h3>
                    <p className="text-neutral-600">Over 500 students have successfully found meaningful internships through our platform, gaining valuable industry experience.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                  <div className="w-5/12 pl-8"></div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-white"></div>
                  <div className="w-5/12 pl-8 animate__animated animate__fadeInRight">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Startup Growth</h3>
                    <p className="text-neutral-600">Partnered with 100+ startups, helping them scale their operations with fresh talent and innovative perspectives.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right animate__animated animate__fadeInLeft">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Industry Impact</h3>
                    <p className="text-neutral-600">Created lasting connections between academia and industry, fostering innovation and growth in the tech ecosystem.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white"></div>
                  <div className="w-5/12 pl-8"></div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-neutral-600">Student Satisfaction</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-neutral-600">Conversion to Full-time</div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-neutral-600">Success Stories</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a href="#contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 animate__animated animate__fadeInUp">
                <span>Join Our Community</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourthpage;