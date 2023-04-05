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
                <NavLink className={({isActive})=>(isActive?'active':'')} to="/">Shop</NavLink>
                <NavLink className={({isActive})=>(isActive?'active':'')} to="/orders">Order</NavLink>
                <NavLink className={({isActive})=>(isActive?'active':'')} to="/inventory">Inverntory</NavLink>
                <NavLink className={({isActive})=>(isActive?'active':'')} to="/login">Login</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;