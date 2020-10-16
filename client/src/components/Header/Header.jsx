import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Adidas_Logo.svg';

function Header() {
    return(
        <div className="header">
            <Link to='/' className='header__link'>
                <img src={logo} alt="" className="header__link-logo"/>
            </Link>
            <Link to='/cart' className='header__link'>
                <p className="header-nav">Cart</p>
            </Link>
        </div>
    );
}

export default Header;