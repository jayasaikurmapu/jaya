import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <h2>Employee credentials</h2>

      <EmployeeForm onAddEmployee={handleAddEmployee} />
      {employees.length > 0 ? (
        <ul>
          <h2>Employee List</h2>
          {employees.map((employee) => (
            <li key={employee.email}>
              {employee.name} ({employee.email})
            </li>
          ))}
          <h3>Privilleges available for Employee</h3>
          <ol>
          <li>Access to company facilities and equipment.</li>
          <li>Regular compensation or salary.</li>
          <li>Employer-provided benefits, such as health insurance or retirement plans.</li>
          <li>Opportunities for advancement and professional development.</li>
          <li>Protection from discrimination and harassment.</li>
          <li>Time off for vacation, illness, and other personal reasons.</li>
          <li>Access to company policies and procedures.</li>
          <li>Opportunities to provide feedback and suggestions to management.</li>
          <li>Expectation of fair and ethical treatment from management and colleagues.</li>
        </ol>
        </ul>
        
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;


// import React from 'react';

// const EmployeeList = () => {
//   return (
//     <div>
//       <h1>Employee List</h1>
//       <p>List of all employees</p>
//     </div>
//   );
// };

// export default EmployeeList;
