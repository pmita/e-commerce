import React from 'react'
import { Link } from 'react-router-dom' // ROUTER
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
// COMPONENTS
import CartItem from './CartItem';


const Cart = () => {
    // STATE
    const { cart } = useAuthContext()

    return(
        <section className='cart-page'>
            <h2>Your cart items</h2>
            <Link to='/products'>
                Back to shopping
            </Link>
            <div className='cart-items'>
                {cart && cart.map((item) => {
                    return <CartItem item={item} />
                })}
            </div>
        </section>
    );
}

export default Cart; 