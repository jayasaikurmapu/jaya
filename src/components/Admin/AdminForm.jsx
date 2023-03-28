import React, { useState } from 'react';

const AdminForm = ({ onAddAdmin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdmin = {
      name,
      email,
    };

    onAddAdmin(newAdmin);

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

      <button type="submit">Add Admin</button>
    </form>
  );
};

export default AdminForm;



// import React from 'react';

// const AdminForm = () => {
//   return (
//     <div>
//       <h1>Add Admin</h1>
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

// export default AdminForm;
