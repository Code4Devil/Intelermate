import React from 'react'

const Secondpage = () => {
  return (
    <div id='about' className='flex flex-col justify-center items-center p-4 gap-14  sm:p-10'>
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-black text-[40px] font-bold' >Our Vision</h2>
            <div className=' h-[4px] w-[100px] bg-[#2563EB]'></div>
        </div>

        <div className='flex flex-col gap-20 sm:flex-row'>
            <div className='w-[100%] sm:w-[50%] text-lg '>
                <p>At Intelermate, our vision is to create a world where every student has access to meaningful opportunities that bridge the gap between academia and industry, empowering them to grow, learn, and innovate.
                    <br />
                    <br />

                   We aspire to be the catalyst that drives collaboration between talented students and visionary startups, fostering an ecosystem where fresh ideas and entrepreneurial ambition come together to create impactful solutions.
                    <br />
                    <br />

                   By connecting students with startups in need of dynamic, skilled individuals, we aim to shape the future of work, nurture talent, and support entrepreneurial growth.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 w-[100%] sm:w-[50%]">
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-blue-600 text-4xl font-bold mb-2">500+</div>
                <div className="text-neutral-600">Students Connected</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-purple-600 text-4xl font-bold mb-2">100+</div>
                <div className="text-neutral-600">Startups Partnered</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-green-600 text-4xl font-bold mb-2">50+</div>
                <div className="text-neutral-600">Success Stories</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-orange-600 text-4xl font-bold mb-2">95%</div>
                <div className="text-neutral-600">Satisfaction Rate</div>
              </div>
            </div>
        </div>

        <div>
          <div className='bg-[#1D4ED8] px-6 py-3 text-white rounded-lg text-lg'>Explore our Services <i className="ri-arrow-right-long-line"></i></div>
        </div>
    </div>
  )
}

export default Secondpage