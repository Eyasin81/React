import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
// import { IoHomeOutline } from "react-icons/io5";
//<NavLink to='/' className='nav-link'><IoHomeOutline/></NavLink>
const Nav = () => {
   return (
    <nav>
<NavLink to='/' className='nav-link'>Home</NavLink>
    
    </nav>

   );
};

export default Nav;