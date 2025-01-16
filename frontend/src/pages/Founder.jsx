import React from 'react'
import { useEffect } from 'react'
import Nav2 from '../Components/Nav2'
import FounderLanding from '../Components/FounderLanding'
import Whyus from '../Components/whyus'
import PostInternship from '../Components/PostInternship'
import Benifits from '../Components/Benifits'
import Requirments from '../Components/Requirments'
import Foot2 from './Foot2'


const Founder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  return (
    <div>
      <Nav2 />
      <FounderLanding />
      <Whyus />
      <PostInternship />
      <Benifits />
      <Requirments />
      <Foot2 />
    </div>
  )
}

export default Founder