import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },
];

const Navbar = () => (
  <nav className="navBar">
    <ul>
      {links.map((link) => (
        <li className="nav-link" key={link.id}>
          <NavLink to={link.path} activeclassname="active-link" exact="true">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
