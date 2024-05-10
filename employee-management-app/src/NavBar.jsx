import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
      <div>
        <NavLink to='/add'>Add Employee</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
