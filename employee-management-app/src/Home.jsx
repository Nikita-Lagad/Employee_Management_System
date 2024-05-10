import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './EmployeeForm';
import { NavBar } from './NavBar';

export const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavBar />} />
        <Route path="/add" element={<EmployeeForm />} />
      </Routes>
    </Router>
  );
};
