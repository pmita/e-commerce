import React, { useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'; // HOOKS

const CartTotal = () => {
    // STATE
    const { dispatch, cart, total } = useAuthContext()

    // useEFFECT
    useEffect(() => {
        dispatch({ type : 'CALCULATE_TOTAL' })
    }, [dispatch, cart])

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Hey, you clicked check-out button')
    } 

    return(
        <div className='cart-items-total'>
            <form onSubmit={handleSubmit}>
                <h4>Sub-total</h4>
                <h4>$ {total}</h4>
                <button className='btn'>Check-out</button>
            </form>
        </div>
    );
}

export default CartTotal;