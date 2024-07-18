import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
const Nav = () => {
   return (
    <nav>
    <NavLink to='/' className='nav-link'><IoHomeOutline/></NavLink>
    <NavLink to='/four' className='nav-link'>Expression</NavLink>
    <NavLink to='/designCard' className='nav-link'>Card Design</NavLink>
    <NavLink to='/useState' className='nav-link'>UseState</NavLink>
    <NavLink to='/destructor' className='nav-link'>destructor</NavLink>
    <NavLink to='/Mapdata' className='nav-link'>MapData</NavLink>
    <NavLink to='/Conditional' className='nav-link'>Conditional</NavLink>
    </nav>

   );
};

export default Nav;