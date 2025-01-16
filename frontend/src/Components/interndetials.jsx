import React from 'react';

const InternDetails = ({ intern }) => {
  if (!intern) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200" id="el-6xoxohhg">
      {/* Header with back button */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center" id="el-z9n8r8cq">
        <div className="flex items-center space-x-4" id="el-cqxqye71">
          <button onClick={() => window.location.href='#internsList'} className="text-gray-600 hover:text-gray-900" id="el-5nklo9du">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-9xdou09i">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" id="el-5q50dh1a"></path>
            </svg>
          </button>
          <h2 className="text-lg font-semibold" id="el-2khsp5p8">Intern Details</h2>
        </div>
       
      </div>

      <div className="p-6" id="el-9w79t6i7">
        {/* Basic Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="el-4z4ampnl">
          {/* Profile Section */}
          <div className="lg:col-span-1" id="el-st2tuyin">
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg" id="el-p91wns33">
              <img src="https://placehold.co/120x120" alt="Profile" className="w-32 h-32 rounded-full mb-4 transition-opacity duration-300 opacity-100" loading="lazy" id="el-88ymqd54" />
              <h3 className="text-xl font-semibold" id="el-sxvs6q7l">{intern.firstName} {intern.lastName}</h3>
              <p className="text-gray-600" id="el-8mrvcke6">{intern.position}</p>
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
                  <label className="block text-sm font-medium text-gray-700" id="el-bubtop1g">First Name</label>
                  <p className="mt-1 text-gray-900" id="el-0r968u7s">{intern.firstName}</p>
                </div>
                <div id="el-5qnak1kx">
                  <label className="block text-sm font-medium text-gray-700" id="el-qzjcu6ru">Last Name</label>
                  <p className="mt-1 text-gray-900" id="el-x537gwix">{intern.lastName}</p>
                </div>
                <div id="el-yw958izt">
                  <label className="block text-sm font-medium text-gray-700" id="el-ggk6n55u">Email</label>
                  <p className="mt-1 text-gray-900" id="el-gkkj0njo">{intern.email}</p>
                </div>
                <div id="el-s6j4xco7">
                  <label className="block text-sm font-medium text-gray-700" id="el-2bm5k3l7">Phone Number</label>
                  <p className="mt-1 text-gray-900" id="el-uvg5n01v">{intern.phone}</p>
                </div>
              </div>
              <div className="space-y-4" id="el-lsbgivia">
                <div id="el-fujhtd4d">
                  <label className="block text-sm font-medium text-gray-700" id="el-2bakjqd3">Position Applied For</label>
                  <p className="mt-1 text-gray-900" id="el-hgpr8f2a">{intern.position}</p>
                </div>
                <div id="el-bwxobh39">
                  <label className="block text-sm font-medium text-gray-700" id="el-ym813zt9">Portfolio URL</label>
                  <a href={intern.portfolio} className="mt-1 text-blue-600 hover:text-blue-800 block" id="el-te45yumn">{intern.portfolio}</a>
                </div>
                <div id="el-w6g4w14y">
                  <label className="block text-sm font-medium text-gray-700" id="el-0wtgt8jj">Resume/CV</label>
                  <a href={intern.resume} className="mt-1 inline-flex items-center text-blue-600 hover:text-blue-800" id="el-p8ns2u77">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-vuot7snv">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" id="el-qvg34q0i"></path>
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Why should we hire you */}
            <div className="mt-6" id="el-5vvmw4wj">
              <label className="block text-sm font-medium text-gray-700" id="el-epasrexm">Why should we hire you?</label>
              <div className="mt-2 p-4 bg-gray-50 rounded-lg" id="el-0u1irmfp">
                <p className="text-gray-900" id="el-z4shhwrv">{intern.coverLetter}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternDetails;