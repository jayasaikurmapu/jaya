// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Shared/Header';
// import Footer from './Shared/Footer';
// import Sidebar from './Shared/Sidebar';
// import Dashboard from './Dashboard';
// import EmployeeList from './Employee/EmployeeList';
// import EmployeeForm from './Employee/EmployeeForm';
// import HRList from './HR/HRList';
// import HRForm from './HR/HRForm';
// import FinanceList from './Finance/FinanceList';
// import FinanceForm from './Finance/FinanceForm';
// import AdminList from './Admin/AdminList';
// import AdminForm from './Admin/AdminForm';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Sidebar />

//       <main>
//         <Switch>
//           <Route exact path="/" component={Dashboard} />
//           <Route path="/employee" component={EmployeeList} />
//           <Route path="/hr" component={HRList} />
//           <Route path="/finance" component={FinanceList} />
//           <Route path="/admin" component={AdminList} />
//         </Switch>
//       </main>

//       <Footer />
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import EmployeeList from '../components/Employee/EmployeeList';
// import EmployeeForm from '../components/Employee/EmployeeForm';
import HRList from '../components/HR/HRList';
// import HRForm from '../components/HR/HRForm';
import FinanceList from '../components/Finance/FinanceList';
// import FinanceForm from '../components/Finance/FinanceForm';
import AdminList from '../components/Admin/AdminList';
// import AdminForm from '../components/Admin/AdminForm';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
// import Sidebar from '../components/Shared/Sidebar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <center><Header /></center>
      {/* <Sidebar /> */}
      <br />
      <h2>Available Roles</h2>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Dashboard</Link>
            </li> */}
            <li>
              <button id='qwe'><Link to="/Employee" >Employee</Link></button>
              {/* target="_blank" : to display content in a new page*/}
            </li>
            <li>
              <button id='abc'><Link to="/HR">HR</Link></button>
            </li>
            <li>
              <button id='def'><Link to="/Finance">Finance</Link></button>
            </li>
            <li>
              <button id='asd'><Link to="/Admin">Admin</Link></button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/Employee">
            <EmployeeList />
            {/* <EmployeeForm /> */}
          </Route>
          <Route path="/HR">
            <HRList />
            {/* <HRForm /> */}
          </Route>
          <Route path="/Finance">
            <FinanceList />
            {/* <FinanceForm /> */}
          </Route>
          <Route path="/Admin">
            <AdminList />
            {/* <AdminForm /> */}
          </Route>
        </Switch>
        
        <center> <Footer /></center>
      </div>
    </Router>
  );
};

export default App;
