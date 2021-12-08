import React, { useState } from 'react'
// REACT ROUTER
import { NavLink, Link } from 'react-router-dom'
// ASSETS
import logoImg from '../assets/images/logo.png'
import acountIcon from '../assets/icons/acount.svg'
import cartIcon from '../assets/icons/cart.svg'
import burgerIcon from '../assets/icons/burger.svg'

const Navbar = () => {
    // STATE
    const [isActive, setIsActive] = useState(false)
    return(
        <nav>
            <span className='navbar-burger' >
                <img 
                    src={burgerIcon} 
                    alt='mobile navigation burger menu'
                    onClick={() => setIsActive(!isActive)} 
                />
            </span>
            <Link 
                to='/' 
                className='navbar-logo'
            >
                <img 
                    src={logoImg} 
                    alt='candleaf logo in green with white background' 
                />
            </Link>

            <ul className={isActive ? 'navbar-links active' : 'navbar-links'}>
                <li>
                    <NavLink 
                        to='/products'
                        onClick={() => setIsActive(false)}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/about'
                        onClick={() => setIsActive(false)}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/contact-us'
                        onClick={() => setIsActive(false)}
                    >
                        Contact us
                    </NavLink>
                </li>
            </ul>
                
            <ul className='navbar-actions'>
                <li>
                    <Link to='/user'>
                        <img 
                            src={acountIcon} 
                            alt='user profile icon' 
                        />
                    </Link>
                </li>
                <li>
                    <Link to='/cart' className='navbar-cart'>
                        <img 
                            src={cartIcon} 
                            alt='user cart icon' 
                        />
                        <span>1</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;