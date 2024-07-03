import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
const Nav = () => {
   return (
    <nav>
    <NavLink to='/' className='nav-link'><IoHomeOutline/></NavLink>
    <NavLink to='/four' className='nav-link'>Expression</NavLink>
    <NavLink to='/useState' className='nav-link'>UseState</NavLink>
    </nav>

   );
};

export default Nav;