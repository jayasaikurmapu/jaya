import React, { useState } from 'react';
import './hr-form.css';

const HRForm = ({ onAddHR }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHR = {
      name,
      email,
    };

    onAddHR(newHR);

    setName('');
    setEmail('');
  };

  return (
    <form className="hr-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Add HR</button>
    </form>
  );
};

export default HRForm;





// import React from 'react';

// const HRForm = () => {
//   return (
//     <div>
//       <h1>Add HR</h1>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default HRForm;
