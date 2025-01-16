import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img src="https://intelermate.tech/assets/intelerate%20logo-Bmy8cM2x.png" alt="Intelermate Logo" className="h-10 w-10 transition-opacity duration-300 opacity-100" loading="lazy" />
                <span className="ml-2 text-2xl font-bold text-white">Intelermate</span>
              </div>
              <p className="text-gray-400">Where Curiosity Meets Opportunity. Connecting talented students with innovative startups.</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/intelermate/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                </a>
                <a href="https://www.instagram.com/intelermate.tech/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-6 h-6 transition-opacity duration-300 opacity-100" loading="lazy" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">For Students</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">For Startups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mentorship</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Career Guidance</a></li>
              </ul>
            </div>

            {/* Contact Info */}
         
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Intelermate. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
     
    </footer>
  );
};

export default Footer;