import React from 'react';

const Successstories = () => {
  return (
    <div>
      <section id="testimonials" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">Success Stories</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Testimonials */}
            <div className="testimonials-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-neutral-800 p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">"Found my dream internship through Intelermate. The platform made it incredibly easy to connect with innovative startups!"</p>
                <div className="border-t border-neutral-700 pt-4">
                  <h4 className="text-white font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400">Frontend Developer Intern</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-neutral-800 p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">"Intelermate connected me with a startup that perfectly matched my skills and interests. Highly recommend!"</p>
                <div className="border-t border-neutral-700 pt-4">
                  <h4 className="text-white font-semibold">John Doe</h4>
                  <p className="text-gray-400">Backend Developer Intern</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-neutral-800 p-8 rounded-xl shadow-lg">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">"Thanks to Intelermate, I gained invaluable experience and landed a full-time job after my internship!"</p>
                <div className="border-t border-neutral-700 pt-4">
                  <h4 className="text-white font-semibold">Emily Smith</h4>
                  <p className="text-gray-400">Data Scientist Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Successstories;