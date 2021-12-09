import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom' // REACT ROUTER
// ASSETS
import logoImg from '../assets/images/logo.png'
import acountIcon from '../assets/icons/acount.svg'
import cartIcon from '../assets/icons/cart.svg'
import burgerIcon from '../assets/icons/burger.svg'
import { useAuthContext } from '../hooks/useAuthContext' // CONTEXT
import { useSignout } from '../hooks/useSignout' // HOOKS

const Navbar = () => {
    // STATE
    const [isActive, setIsActive] = useState(false)
    const { user } = useAuthContext()
    const { signout, isPending } = useSignout()
    const navigate = useNavigate()

    // FUNCTIONS
    const userIsSigned = () => {
        return(
            <>
                <li>
                    <Link to='/user'>
                        <img 
                            src={acountIcon} 
                            alt='user profile icon' 
                    />
                    </Link>
                </li>
                    <li>
                        {!isPending && <button className='btn' onClick={signout}>Sign Out</button>}
                        {isPending && <button className='btn' disabled>Loading...</button>}
                    </li>
            </>
        )
    }

    const userIsNotSigned = () => {
        return(
            <li>
                <button className='btn' onClick={() => navigate('/signin')}>
                    Sign in  
                </button>
            </li>
        )
    }
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
                {user ? userIsSigned() : userIsNotSigned()}
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