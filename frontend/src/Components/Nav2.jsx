import React, { useState } from 'react';
import logo from '../logo/logo.png'

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral-900">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 flex items-center gap-4">
              <img className="h-8 w-8" src={logo} alt="Logo" />
              <h1 className='text-white font-[founders] text-[30px]'>Intelermate</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#hero" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#internshipForm" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Apply</a>
                <a href="#benefits" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Benefits</a>
                <a href="#requirements" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Requirements</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#hero" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#internshipForm" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Apply</a>
          <a href="#benefits" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Benefits</a>
          <a href="#requirements" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Requirements</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;