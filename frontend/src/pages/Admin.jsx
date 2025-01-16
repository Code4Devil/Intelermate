import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Intern from '../Components/interndetials';
const Admin = () => {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    const fetchInternData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/interns');
        setInterns(response.data);
      } catch (error) {
        console.error('Error fetching intern data:', error);
      }
    };

    fetchInternData();
  }, []);

  return (
    <div>
      {interns.map((intern) => (
        <Intern key={intern._id} intern={intern} />
      ))}
    </div>
  );
};

export default Admin;