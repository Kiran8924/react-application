// import React from 'react';
// import Component1 from './Component1';
// import Component2 from './Component2';

// const SecondPage: React.FC = () => {
//   return (
//     <div>
//       <h1>Second Page</h1>
//       <Component1 />
//       <Component2 />
//     </div>
//   );
// };

// export default SecondPage;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Component2 from './Component2'; // Import Component2
import './secondPageStyles.css'; // Import the CSS file

const SecondPage: React.FC = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    // Check if user details exist in local storage
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      // Redirect to the first page with a message
      navigate('/form');
      alert('Please enter your details before accessing the second page.');
    }
  }, [navigate]);

  // Retrieve user details from local storage if available
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

  return (
    <div className="container">
      <h2>Second Page</h2>
      {/* Display the user details and conditions */}
      {userDetails.name && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {userDetails.name}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      )}

      {userDetails.name && (
        <div>
          <h3>Conditions:</h3>
          <p>Condition 1: Your custom condition 1 text goes here.</p>
          <p>Condition 2: Your custom condition 2 text goes here.</p>
        </div>
      )}

      <Component2 /> {/* Render Component2 */}
    </div>
  );
};

export default SecondPage;
