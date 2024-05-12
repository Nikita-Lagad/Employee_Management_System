import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-links">
        <NavLink to='/add' activeClassName="active-link">Add Employee</NavLink>
        <NavLink to='/delete' activeClassName="active-link">Delete Employee</NavLink>
        <NavLink to='/update' activeClassName="active-link">Update Employee</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
