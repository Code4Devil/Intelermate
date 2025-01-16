import React, { useEffect } from 'react'
import Mainpage from './mainpage'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Fourthpage from './Fourthpage'
import Successstories from './Successstories'
import GetinTouch from './GetinTouch'
import Footer from './Footer'
import mainNavbar from '../Components/mainNavbar'

const Landingpage = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <div> 
      <mainNavbar />
        <Mainpage />
        <Secondpage />
        <Thirdpage />
        <Fourthpage />
        <Successstories />
        <GetinTouch />
        <Footer />
    </div>
  )
}

export default Landingpage