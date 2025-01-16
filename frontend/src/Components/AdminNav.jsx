import React, { useEffect, useState } from 'react';

const AdminNav = () => {
  const [interns, setInterns] = useState([]);
  const [founders, setFounders] = useState([]);

 

  return (
    <div>
      <nav className="hidden sm:flex flex-col w-[20%] h-screen bg-white border-r border-gray-200 fixed" id="el-3t9jsdp1">
        <div className="flex items-center justify-center h-16 border-b border-gray-200" id="el-3twsjqfa">
          <span className="text-xl font-bold" id="el-cfobukv6">Intelermate</span>
        </div>
        
        <div className="flex flex-col flex-grow p-4 space-y-2" id="el-n8k4egzg">
          <a href="#dashboard" className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300 active-link" id="el-9fmjsg2n">Dashboard</a>
          <a href="#interns" className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300" id="el-90dyp343">Interns</a>
          <a href="#founders" className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300" id="el-hwevnk1k">Founders</a>
          <a href="#settings" className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300" id="el-3ax6v2eq">Settings</a>
        </div>
        
        <div className="p-4 border-t border-gray-200" id="el-9doqn1pt">
          <div className="flex items-center space-x-2" id="el-gffeqdzk">
            <img src="https://placehold.co/40x40" alt="Profile" className="w-10 h-10 rounded-full transition-opacity duration-300 opacity-100" loading="lazy" id="el-qnea7ebt" />
            <div id="el-le6nw2kh">
              <p className="text-sm font-medium" id="el-d5bd5iun">Admin User</p>
              <p className="text-xs text-gray-500" id="el-6agum8b5">admin@intelermate.com</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="sm:ml-[20%] p-4">
        <h2 className="font-bold text-2xl mb-4">Interns</h2>
        <ul>
          {interns.map(intern => (
            <li key={intern._id}>
              {intern.firstName} {intern.lastName} - {intern.position}
            </li>
          ))}
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-4">Founders</h2>
        <ul>
          {founders.map(founder => (
            <li key={founder._id}>
              {founder.companyName} - {founder.founderName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminNav;