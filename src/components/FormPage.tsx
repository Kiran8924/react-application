// import React, { useState } from 'react';
// import { TextField, Button, Container } from '@mui/material';
// import { Link } from 'react-router-dom';

// const FormPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Save user details in local storage
//     localStorage.setItem('userDetails', JSON.stringify(formData));
//   };

//   return (
//     <Container maxWidth="sm">
//       <h2>Form Page</h2>
//       <TextField
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Phone Number"
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleSubmit}>
//         Submit
//       </Button>
//       <Link to="/second-page">
//         <Button variant="contained" color="secondary">
//           Go to Second Page
//         </Button>
//       </Link>
//     </Container>
//   );
// };

// export default FormPage;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Component1 from './Component1'; // Import Component1
import './formPageStyles.css';

const FormPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save user details in local storage
    localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
    // Navigate to the second page
    navigate('/second-page');
  };

  return (
    <div className='box'>
      <h2>Form Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Component1 /> {/* Render Component1 */}
    </div>
  );
};

export default FormPage;
