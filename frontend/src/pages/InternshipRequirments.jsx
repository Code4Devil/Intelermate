import React from 'react';

const InternshipRequirments = () => {
  return (
    <div id='requirements' className="bg-[#171717] pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-5858m6nh">
        <div className="text-center mb-16 animate__animated animate__fadeIn" id="el-ka3l8goa">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" id="el-rd63jkbm">Internship Requirements</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto" id="el-vyk8jqon">Key qualifications and skills we're looking for in our interns</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-white" id="el-buszyrfq">
          {/* Common Requirements */}
          <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft" id="el-ov4x1wcr">
            <h3 className="text-2xl font-bold mb-6 flex items-center" id="el-hwm0kh28">
              <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-qpdkd02g">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" id="el-0grk23c3"></path>
              </svg>
              Common Requirements
            </h3>
            <ul className="space-y-4" id="el-w6kl6rsr">
              <li className="flex items-center" id="el-159y4e64">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-dabkijzj">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-0vkcswji"></path>
                </svg>
                Currently pursuing or recently graduated in Computer Science or related field
              </li>
              <li className="flex items-center" id="el-ux8zyzmt">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-g92dxzp7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-bn7bcutb"></path>
                </svg>
                Strong problem-solving and analytical skills
              </li>
              <li className="flex items-center" id="el-74aynvjd">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-vjy0jjlk">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-rk4e0y1e"></path>
                </svg>
                Excellent communication and teamwork abilities
              </li>
              <li className="flex items-center" id="el-lnuthdn9">
                <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-akt08z19">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" id="el-9tchtark"></path>
                </svg>
                Ability to work 20-40 hours per week
              </li>
            </ul>
          </div>

          {/* Role-Specific Requirements */}
          <div className="space-y-6 animate__animated animate__fadeInRight" id="el-649vlzc4">
            <div className="bg-neutral-800 rounded-xl p-6" id="el-xwny7eez">
              <h4 className="text-xl font-semibold mb-4 text-blue-400" id="el-1cwfg0bw">Frontend Developer</h4>
              <ul className="space-y-2 text-neutral-300" id="el-7561o1kx">
                <li id="el-2ght6rvy">• HTML5, CSS3, JavaScript (ES6+)</li>
                <li id="el-gepi4ftx">• Experience with React.js</li>
                <li id="el-cuop64su">• Understanding of responsive design</li>
              </ul>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6" id="el-ucobdzli">
              <h4 className="text-xl font-semibold mb-4 text-green-400" id="el-u8gzisbm">Backend Developer</h4>
              <ul className="space-y-2 text-neutral-300" id="el-nqkvhthe">
                <li id="el-92a3zez8">• Node.js fundamentals</li>
                <li id="el-1yf443jp">• Basic database knowledge</li>
                <li id="el-da0ky18f">• Understanding of RESTful APIs</li>
              </ul>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6" id="el-roqt36e8">
              <h4 className="text-xl font-semibold mb-4 text-purple-400" id="el-wbyh37xb">Full Stack Developer</h4>
              <ul className="space-y-2 text-neutral-300" id="el-nl70lifi">
                <li id="el-df6tpq9z">• Frontend and Backend basics</li>
                <li id="el-mbmabo5z">• Database management skills</li>
                <li id="el-mypic05h">• Version control (Git)</li>
              </ul>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6" id="el-yfep8h94">
              <h4 className="text-xl font-semibold mb-4 text-pink-400" id="el-533tqpp4">UI/UX Designer</h4>
              <ul className="space-y-2 text-neutral-300" id="el-6o0sg2qk">
                <li id="el-swd02wnh">• Proficiency in design tools</li>
                <li id="el-5ifh06is">• Basic prototyping skills</li>
                <li id="el-jy6ko2o3">• Understanding of user-centered design</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate__animated animate__fadeIn" id="el-u3tp5lch">
          <a href="#applicationForm" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300" id="el-x5lhnh4p">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipRequirments;