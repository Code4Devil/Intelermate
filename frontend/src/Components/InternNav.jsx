import React from 'react';
import logo from '../logo/logo.png';

const InternNav = () => {
  return (
    <div className='bg-[#171717] text-white px-4 py-2 sm:px-10'>
           <div className="flex items-center justify-between h-16" id="el-9bxgevxx">
      <div className="flex items-center h-full" id="el-98blr4c8">
        <div className="flex-shrink-0 h-full flex items-center gap-2" id="el-rqpjspp9">
            <img className='h-[70%]' src={logo} alt="" />
          <span className="text-xl font-bold font-[founders] text-[35px]" id="el-2vg2bmwr">Intelermate</span>
        </div>
      </div>
      <div className="hidden md:block" id="el-5uk0kiqc">
        <div className="ml-10 flex items-baseline space-x-4" id="el-gcifavgv">
          <a href="#hero" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-nuqatkog">Home</a>
          <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-kdvu77eu">About</a>
          <a href="#positions" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-8wikifcu">Positions</a>
          <a href="#applicationForm" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-ryz70d26">Apply</a>
          <a href="#requirements" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-ofx09jzg">Requirements</a>
          <a href="#benefits" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-700" id="el-kefic0o3">Benefits</a>
        </div>
      </div>
      <div className="md:hidden" id="el-ds0rh7gt">
        
      </div>
    </div>
    </div>
 
  );
};

export default InternNav;