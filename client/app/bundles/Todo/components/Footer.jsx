import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <p>
    Show:
    <NavLink
      to="/"
      exact
      activeStyle={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
    >
      All
    </NavLink>
    {' '}
    <NavLink
      to="/active"
      exact
      activeStyle={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
    >
      Active
    </NavLink>
    {' '}
    <NavLink
      to="/completed"
      exact
      activeStyle={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
    >
      Completed
    </NavLink>
  </p>
);

export default Footer;
