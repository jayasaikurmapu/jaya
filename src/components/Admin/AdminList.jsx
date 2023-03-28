import React, { useState } from 'react';
import AdminForm from './AdminForm';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  const handleAddAdmin = (newAdmin) => {
    setAdmins([...admins, newAdmin]);
  };

  return (
    <div>
      <h2>Enter the Admin credentials</h2>
      <AdminForm onAddAdmin={handleAddAdmin} />

      <h2>Admin List</h2>
      {admins.length > 0 ? (
        <ul>
          {admins.map((admin) => (
            <li key={admin.email}>
              {admin.name} ({admin.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No admins found.</p>
      )}
    </div>
  );
};

export default AdminList;



// import React from 'react';
// import AdminForm from './AdminForm';

// const AdminList = () => {
//   return (
//     <div>
//       <h1>Admin List</h1>
//       <p>List of all admin users</p>
//     </div>
//   );
// };

// export default AdminList;
