import React from 'react'
// REACT ROUTER
import { NavLink, Link } from 'react-router-dom'
// ASSETS
import logoImg from '../assets/images/logo.png'
import acountIcon from '../assets/icons/acount.svg'
import cartIcon from '../assets/icons/cart.svg'

const Navbar = () => {
    return(
        <nav>
                <Link to='/' className='navbar-logo'>
                    <img src={logoImg} alt='candleaf logo in green with white background' />
                </Link>

                <ul className='navbar-links'>
                    <li>
                        <NavLink to='/products'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-us'>Contact us</NavLink>
                    </li>
                </ul>
                
                <ul className='navbar-actions'>
                    <li>
                        <Link to='/user'>
                            <img src={acountIcon} alt='user profile icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/cart' className='navbar-cart'>
                            <img src={cartIcon} alt='user cart icon' />
                            <span>1</span>
                        </Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;