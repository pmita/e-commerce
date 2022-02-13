import React, { useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'; // HOOKS
import { useNavigate } from 'react-router-dom' //ROUTER

const CartTotal = () => {
    // STATE
    const { dispatch, cart, total } = useAuthContext()
    const navigate = useNavigate()

    // useEFFECT
    useEffect(() => {
        dispatch({ type : 'CALCULATE_TOTAL' })
    }, [dispatch, cart])

    // EVENTS
    const redirectToCheckout = () => {
        navigate('/checkout-details')
    }

    return(
        <div className='cart-items-total'>
            <h4>Sub-total</h4>
            <h4>$ {total}</h4>
            <button 
                className='btn'
                onClick={redirectToCheckout}
            >
                Check-out
            </button>
        </div>
    );
}

export default CartTotal;