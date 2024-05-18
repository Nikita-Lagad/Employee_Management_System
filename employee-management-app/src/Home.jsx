import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import { NavBar } from './NavBar';
import EmployeeDelete from './EmployeeDelete';
import EmployeeUpdate from './EmployeeUpdate';
import EmployeeList from './EmployeeList';
import './Employee.css'

export const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path="/add" element={<EmployeeForm />} />
        <Route path='/all' element={<EmployeeList/>} />
        <Route path="/delete" element={<EmployeeDelete />} />
        <Route path='update' element={<EmployeeUpdate/>} />
      </Routes>
    </Router>
  );
};