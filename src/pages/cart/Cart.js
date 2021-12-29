import React from 'react'
import { Link } from 'react-router-dom' // ROUTER
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
// COMPONENTS
import CartItem from './CartItem';
import CartTotal from './CartTotal';

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
                    return (
                        <CartItem 
                            item={item} 
                            key={item.id}
                        />
                    );
                })}
            </div>
            {cart && <CartTotal />}
        </section>
    );
}

export default Cart; 