import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import ems from './ems.png'; 
import './Employee.css'

export const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <NavLink to='/add'>Add Employee</NavLink>
          <NavLink to='/all'>Employees List</NavLink>
          <NavLink to='/delete'>Delete Employee</NavLink>
          <NavLink to='/update'>Update Employee</NavLink>
        </div>
      </div>
      <div className="main-content">
        <div className="nav-logo">
          <img src={ems} alt="Logo" className="logo" />
        </div>
        {/* <h1>Welcome to Employee Management System</h1> */}
        <Outlet />
      </div>
    </>
  );
};
