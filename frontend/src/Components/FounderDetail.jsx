import React from 'react';

const FounderDetail = () => {
  return (
    <div className=' sm:ml-[20%] sm:w-[80%]'>
        <div className="bg-white rounded-lg border border-gray-200" id="el-6xoxohhg">
      {/* Header with back button */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center" id="el-z9n8r8cq">
        <div className="flex items-center space-x-4" id="el-cqxqye71">
          <button onClick={() => window.location.href='#foundersList'} className="text-gray-600 hover:text-gray-900" id="el-5nklo9du">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-9xdou09i">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" id="el-5q50dh1a"></path>
            </svg>
          </button>
          <h2 className="text-lg font-semibold" id="el-2khsp5p8">Founder Details</h2>
        </div>
        <div className="flex space-x-3" id="el-bx1pfq7y">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" id="el-lk9pgxgc">Edit</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" id="el-f7emoot3">Delete</button>
        </div>
      </div>

      <div className="p-6" id="el-9w79t6i7">
        {/* Basic Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="el-4z4ampnl">
          {/* Company Profile Section */}
          <div className="lg:col-span-1" id="el-st2tuyin">
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg" id="el-p91wns33">
              <img src="https://placehold.co/120x120" alt="Company Logo" className="w-32 h-32 rounded-lg mb-4 transition-opacity duration-300 opacity-100" loading="lazy" id="el-88ymqd54" />
              <h3 className="text-xl font-semibold" id="el-epdv6yyx">TechStart Inc.</h3>
              <p className="text-gray-600" id="el-6exag5uc">Sarah Johnson</p>
              <div className="mt-4 flex space-x-2" id="el-d8b723sz">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" id="el-spfi57ig">Active</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-2" id="el-x3lehd2x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="el-hln2a4eb">
              <div className="space-y-4" id="el-i5bjsnc8">
                <div id="el-cl0gb6hc">
                  <label className="block text-sm font-medium text-gray-700" id="el-bubtop1g">Company Name</label>
                  <p className="mt-1 text-gray-900" id="el-0r968u7s">TechStart Inc.</p>
                </div>
                <div id="el-5qnak1kx">
                  <label className="block text-sm font-medium text-gray-700" id="el-qzjcu6ru">Founder Name</label>
                  <p className="mt-1 text-gray-900" id="el-x537gwix">Sarah Johnson</p>
                </div>
                <div id="el-yw958izt">
                  <label className="block text-sm font-medium text-gray-700" id="el-ggk6n55u">Email</label>
                  <p className="mt-1 text-gray-900" id="el-gkkj0njo">sarah@techstart.com</p>
                </div>
                <div id="el-s6j4xco7">
                  <label className="block text-sm font-medium text-gray-700" id="el-2bm5k3l7">Phone Number</label>
                  <p className="mt-1 text-gray-900" id="el-uvg5n01v">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="space-y-4" id="el-lsbgivia">
                <div id="el-fujhtd4d">
                  <label className="block text-sm font-medium text-gray-700" id="el-2bakjqd3">Internship Role</label>
                  <p className="mt-1 text-gray-900" id="el-hgpr8f2a">Full Stack Developer</p>
                </div>
                <div id="el-7vcguhrq">
                  <label className="block text-sm font-medium text-gray-700" id="el-yl4xsu3t">Duration</label>
                  <p className="mt-1 text-gray-900" id="el-ymfweee1">6 months</p>
                </div>
                <div id="el-frx0txi6">
                  <label className="block text-sm font-medium text-gray-700" id="el-yktxhuuq">Stipend</label>
                  <p className="mt-1 text-gray-900" id="el-fbtyes1k">₹15,000/month</p>
                </div>
                <div id="el-7bc021sa">
                  <label className="block text-sm font-medium text-gray-700" id="el-aqw1qtqm">Required Skills</label>
                  <div className="mt-2 flex flex-wrap gap-2" id="el-whozp6wi">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm" id="el-s4dcw9p5">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm" id="el-u1kbjmi8">Node.js</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm" id="el-36ua9qor">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mt-6" id="el-5vvmw4wj">
              <label className="block text-sm font-medium text-gray-700" id="el-epasrexm">Job Description</label>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg" id="el-0u1irmfp">
                <p className="text-gray-900" id="el-z4shhwrv">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>

         
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default FounderDetail;