import React, { useEffect, useRef, useState } from 'react'
import logo from '../logo/logo.png'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Links = [
    { hi: 'Home', a: '#' },
    { hi: 'About', a: '#about' },
    { hi: 'Services', a: '#services' },
    { hi: 'Explore', a: '#explore' },
    { hi: 'Contact', a: '#contact' }
    
];



const MainNavbar = () => {

const Navpanel = useRef(null)
const [panel, setPanel] = useState(false)

useGSAP(
    function () {
      if (panel) {
        gsap.to(Navpanel.current, {
            transform: 'translateY(150%)',
         
        });
       
      } else {
       
        gsap.to(Navpanel.current, {
            transform: 'translateY(0)',
          
        });
      }
    },
    [panel]
  );

  // console.log(panel)




  return (
    <div className='navbar h-[8vh] bg-[#19191C] flex items-center justify-between px-8 z-[99]' >

        <div className='h-full flex items-center gap-2 '>
            <img className='h-[60%]' src={logo} alt="" />
            <h2 className='font-[founders] text-white text-[30px]'>Intelermate</h2>
        </div>
        <div className=' sm:hidden'>
            <div onClick={()=>{setPanel(true)}} className='flex items-center gap-2'>
            <i onClick={()=>{setPanel(true)}} className="ri-menu-line font-bold text-[20px] text-white"></i>
            </div>
       
        </div>
        
        <div className='hidden sm:block'>
             <div className='flex gap-4 md:gap-8 lg:gap-12 text-white font-thin font-[gilroy]'>
                {
                    Links.map((item, index) => (
                       <a key={index} href={item.a}>{item.hi}</a>
                    ))
                }

                <a href="/head" >Admin</a>

                
            
            </div>
        </div>

        <div ref={Navpanel} className='navpart w-screen absolute bg-[#171717] top-[-67%] left-0 flex flex-col items-end gap-5 p-6 px-8 text-white font-[Gilroy] z-20 '>

            <div onClick={()=>{setPanel(false)}} className='flex items-center gap-2'>
            <i  onClick={()=>{setPanel(false)}} className="ri-close-large-line font-bold text-20px"></i>
            </div>

  
          

            {
                    Links.map((item, index) => (
                       <a key={index} href={item.a}>{item.hi}</a>
                    ))
                }
              <a href="/head" >Admin</a>

        </div>

    </div>
  )
}

export default MainNavbar
