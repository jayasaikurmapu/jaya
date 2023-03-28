import React, { useState } from 'react';
import HRForm from './HRForm';

const HRList = () => {
  const [hrs, setHRs] = useState([]);

  const handleAddHR = (newHR) => {
    setHRs([...hrs, newHR]);
  };

  return (
    <div>
      <h2>HR Details</h2>

      <HRForm onAddHR={handleAddHR} />
      {hrs.length > 0 ? (
        <ul>
          <h2>HR List</h2>    
          {/*  */}
          {hrs.map((hr) => (
            <li key={hr.email}>
              {hr.name} ({hr.email})
            </li>
          ))}
          <h3>Privilleges Available for HR</h3>
          <ol>
            <li>Recruiting and staffing</li>
            <li>Training and development</li>
            <li>Employee relations</li>
            <li>Performance management</li>
            <li>Compensation and benefits</li>
            <li>Compliance with laws and regulations</li>
            <li>Recordkeeping and documentation</li>
          </ol>

        </ul>
      ) : (
        <p>No HRs found.</p>
      )}
    </div>
  );
};

export default HRList;



// import React from 'react';

// const HRList = () => {
//   return (
//     <div>
//       <h1>HR List</h1>
//       <p>List of all HR</p>
//     </div>
//   );
// };

// export default HRList;
