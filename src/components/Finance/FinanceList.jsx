import React, { useState } from 'react';
import FinanceForm from './FinanceForm';

const FinanceList = () => {
  const [finances, setFinances] = useState([]);

  const handleAddFinance = (newFinance) => {
    setFinances([...finances, newFinance]);
  };

  return (
    <div>
      <h2>Enter the finance credentials</h2>

      <FinanceForm onAddFinance={handleAddFinance} />
      {finances.length > 0 ? (
        <ul>
          <h3>Privilleges Available for Finance</h3>
          <ol>
            <li>Manage financial records and transactions</li>
            <li>Manage and monitor budgets and expenses</li>
            <li>Generate financial reports and analysis</li>
            <li>Collaborate with other departments on financial planning and forecasting</li>
            <li>Manage accounts payable and receivable</li>
            <li>Ensure compliance with financial regulations and laws</li>
            <li>Make financial recommendations and decisions</li>
          </ol>
          <h2>Finance List</h2>
          {finances.map((finance) => (
            <li key={finance.email}>
              {finance.name} ({finance.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No finances found.</p>
      )}
    </div>
  );
};

export default FinanceList;


// import React from 'react';

// const FinanceList = () => {
//   return (
//     <div>
//       <h1>Finance List</h1>
//       <p>List of all finance employees</p>
//     </div>
//   );
// };

// export default FinanceList;
