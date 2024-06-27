import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
const Nav = () => {
   return (
    <nav>
    <NavLink to='/' className='nav-link'>Home</NavLink>
    <NavLink to='/four' className='nav-link'>Expression</NavLink>
    </nav>

   );
};

export default Nav;