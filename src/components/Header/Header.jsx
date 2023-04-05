import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    
    return (
        <div className='header'>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
            <nav>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Order</NavLink>
                <NavLink to="/inventory">Inverntory</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;