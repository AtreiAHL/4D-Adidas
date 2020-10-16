import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'
import logo from '../../assets/Adidas_Logo.svg';
import hamburger from '../../assets/Icons/HamburgerMenu.svg';
import heart from '../../assets/Icons/Heart.svg';
import person from '../../assets/Icons/Person.svg';
import search from '../../assets/Icons/Search.svg';
import bag from '../../assets/Icons/Cart.svg';


function Header() {
    return(
        <div className="header">
            <img src={hamburger} alt="hamburger" className="header__icon"/>
            <img src={heart} alt="heart" className="header__icon"/>
            <Link to='/' className='header__link'>
                <img src={logo} alt="" className="header__link-logo"/>
            </Link>
            <img src={person} alt="person" className="header__icon"/>
            <img src={search} alt="search" className="header__icon"/>
            <Link to='/cart' className='header__link'>
                <img src={bag} className="header__icon"/>
            </Link>
        </div>
    );
}

export default Header;