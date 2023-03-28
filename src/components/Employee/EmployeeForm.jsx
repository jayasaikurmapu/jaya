import React, { useState } from 'react';

const EmployeeForm = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      email,
    };

    onAddEmployee(newEmployee);

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

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;




// import React from 'react';

// const EmployeeForm = () => {
//   return (
//     <div>
//       <h1>Add Employee</h1>
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

// export default EmployeeForm;
