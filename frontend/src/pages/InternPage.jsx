import React, { useEffect } from 'react';
import InternPage1 from './InternPage1';
import Internpage2 from './Internpage2';
import Positions from './Positions';
import Internform from './Internform';
import InternshipRequirments from './InternshipRequirments';
import Perks from './Perks';
import Foot2 from './Foot2';
import mainNavbar from '../Components/mainNavbar';
import InternNav from '../Components/InternNav';

const InternPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <InternNav/>
      <InternPage1 />
      <Internpage2 />
      <Positions />
      <Internform />
      <InternshipRequirments />
      <Perks />
      <Foot2 />
    </div>
  );
};

export default InternPage;