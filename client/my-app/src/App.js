  import './styles/main.css';
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
  import Dashboard from './components/Dashboard';
  import Layout from './components/shared/Layout';
import Customers from './components/Customers';
import AdminLogin from './components/AdminLogin';
import Users from './components/Users';
// import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
 
  function App() {
    return (
      <Router>
      <Routes>
      <Route path='/Login' element={<AdminLogin />}></Route>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='customers' element={<Customers />} />
        <Route path='/users' element={<Users />} />
        {/* <Route path='/users/adduser' element={<AddUser />}/> */}
        <Route path="/users/edit/:userId" element={<EditUser />} />
        </Route>
        <Route path='login' element={<div>this is the login page</div>} />

      </Routes>
      </Router>
    );
  }

  export default App;
