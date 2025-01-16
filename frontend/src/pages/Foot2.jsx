import React from 'react';

const Foot2 = () => {
  return (
    <div className='flex items-center justify-between w-full'>
      <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-11qcqpvd">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-neutral-700" id="el-a5qzglg0">
            {/* Company Info */}
            <div className="space-y-4" id="el-23o2npd5">
              <h3 className="text-xl font-bold mb-4" id="el-fin77uqw">Intelermate</h3>
              <p className="text-neutral-400" id="el-owulpqkt">Shaping the future of technology through innovative internships and career opportunities.</p>
              <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/intelermate/?viewAsMember=true" className="bg-neutral-700 p-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                      </a>
                      <a href="https://www.instagram.com/intelermate.tech/" className="bg-neutral-700 p-3 rounded-lg hover:bg-neutral-600 transition-colors duration-300">
                        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                      </a>
                    </div>
            </div>

            {/* Quick Links */}
            <div id="el-z9krnyf4">
              <h4 className="text-lg font-semibold mb-4" id="el-27a0ttnu">Quick Links</h4>
              <ul className="space-y-2" id="el-e8f5j6rl">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors" id="el-1">Home</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors" id="el-2">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors" id="el-3">Services</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors" id="el-4">Contact</a></li>
              </ul>
            </div>

          

            {/* Newsletter */}
            <div id="el-8tho2vxu">
              <h4 className="text-lg font-semibold mb-4" id="el-3sknf5sw">Stay Updated</h4>
              <form className="space-y-4" id="el-favlw2el">
                <div id="el-dwcxlt1d">
                  <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-blue-500 text-white" id="el-4xwbo931" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300" id="el-4nvj9j4e">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 text-center text-neutral-400" id="el-vs7bhmdx">
            <p id="el-aqsz45uf">© 2024 Intelermate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot2;