import React, { useState } from 'react';
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
import { useFirestore } from '../../hooks/useFirestore';

const CartQuantity = ({ item }) => {
    // STATE
    const [counter, setCounter] = useState(1)
    const { dispatch, user, cart } = useAuthContext()
    const { updateDocument } = useFirestore('cart')

    // EVENTS
    const handleIncreaseItem = async () => {
        setCounter(counter + 1)
        dispatch({ type : 'INCREASE_ITEM_QUANTITY', payload : item })
        await updateDocument(user.displayName, { 
            cart : [ ...cart ]
        })
    }

    const handleDecreaseItem = async () => {
        setCounter(counter - 1)
        dispatch({ type : 'DECREASE_ITEM_QUANTITY', payload : item })
        if(counter === 1){
            dispatch({ type : 'REMOVE_ITEM', payload : item})
        }
        await updateDocument(user.displayName, { 
            cart : [ ...cart ]
        })
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