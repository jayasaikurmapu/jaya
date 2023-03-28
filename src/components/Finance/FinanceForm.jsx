import React, { useState } from 'react';
import "./Finance.css";

const FinanceForm = ({ onAddFinance }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFinance = {
      name,
      email,
    };

    onAddFinance(newFinance);

    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Add Finance</button>
    </form>
  );
};

export default FinanceForm;



// import React from 'react';

// const FinanceForm = () => {
//   return (
//     <div>
//       <h1>Add Finance Employee</h1>
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

// export default FinanceForm;
