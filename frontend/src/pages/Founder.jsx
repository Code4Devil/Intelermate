import React from 'react'
import { useEffect } from 'react'
import Navbar2 from '../Components/Navbar2'
import FounderLanding from '../Components/FounderLanding'
import Whyus from '../Components/whyus'
import PostInternship from '../Components/PostInternship'
import Benifits from '../Components/Benifits'
import Requirments from '../Components/Requirments'
import Footer2 from './Footer2'


const Founder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  return (
    <div>
      <Navbar2 />
      <FounderLanding />
      <Whyus />
      <PostInternship />
      <Benifits />
      <Requirments />
      <Footer2 />
    </div>
  )
}

export default Founder