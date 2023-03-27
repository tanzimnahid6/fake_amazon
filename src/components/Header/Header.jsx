import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Mange Inverntory</a>
                <a href="">Login</a>
            </nav>
        </div>
    );
};

export default Header;