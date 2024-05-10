import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to='/add'>Add Employee</NavLink>
        <NavLink to='/delete'>Delete Employee</NavLink>

      </div>
      <Outlet />
    </div>
  );
};