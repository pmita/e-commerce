import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext'; // HOOKS

const CartQuantity = ({ item }) => {
    // STATE
    const [counter, setCounter] = useState(1)
    const { dispatch } = useAuthContext()

    // EVENTS
    const handleIncreaseItem = () => {
        setCounter(counter + 1)
        dispatch({ type : 'INCREASE_ITEM_QUANTITY', payload : item })
    }

    const handleDecreaseItem = () => {
        setCounter(counter - 1)
        dispatch({ type : 'DECREASE_ITEM_QUANTITY', payload : item })
        if(counter === 1){
            dispatch({ type : 'REMOVE_ITEM', payload : item})
        }
    }
    return(
        <div className='quantity-controls'>
            <button className='btn' onClick={handleIncreaseItem}>+</button>
            <span>{counter}</span>
            <button className='btn' onClick={handleDecreaseItem}>-</button>
        </div>
    );
}

export default CartQuantity;