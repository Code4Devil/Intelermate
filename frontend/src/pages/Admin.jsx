import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InternDetails from '../Components/interndetials';
import FounderDetails from '../Components/FounderDetail';
import AdminNav from '../Components/AdminNav';

const Admin = () => {
  const [interns, setInterns] = useState([]);
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/interns`);
        setInterns(response.data);
      } catch (error) {
        console.error('Error fetching interns:', error);
      }
    };

    const fetchFounders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/founders`);
        setFounders(response.data);
      } catch (error) {
        console.error('Error fetching founders:', error);
      }
    };

    fetchInterns();
    fetchFounders();
  }, []);

  // console.log(interns);
  // console.log(founders);

  return (

    <div>
      < AdminNav/>
        <div className='w-full sm:w-[80%] sm:ml-[20%]'>
       <div className='p-4'>
      <h2 className="font-bold text-2xl mb-4">Interns</h2>
      {interns.map((intern) => (
        <InternDetails key={intern._id} intern={intern} />
      ))}
      <h2 className="font-bold text-2xl mt-8 mb-4">Founders</h2>
      {founders.map((founder) => (
        <FounderDetails key={founder._id} founder={founder} />
      ))}
    </div>
    </div>
    </div>

    

  
   
  );
};

export default Admin;