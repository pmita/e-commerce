import React from 'react';
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
import { useFirestore } from '../../hooks/useFirestore';

const CartQuantity = ({ item }) => {
    // STATE
    const { dispatch, user } = useAuthContext()
    const { 
        updateDocumentInSubcollection, 
        deleteDocumentInSubcollection } = useFirestore('cart')

    // EVENTS    
    const handleIncreaseItem = async () => {
        dispatch({ type : 'INCREASE_ITEM_QUANTITY', payload : item })
        await updateDocumentInSubcollection(
            user.uid, 
            item.id, 
            { quantity : item.quantity + 1}
        )
    }

    const handleDecreaseItem = async () => {
        dispatch({ type : 'DECREASE_ITEM_QUANTITY', payload : item })
        if(item.quantity === 1){
            dispatch({ type : 'REMOVE_ITEM', payload : item})
            await deleteDocumentInSubcollection(user.uid, item.id)
        } else{
            await updateDocumentInSubcollection(
                user.uid, 
                item.id, 
                { quantity : item.quantity - 1}
            )
        }
    }

    return(
        <div className='quantity-controls'>
            <button className='btn' onClick={handleIncreaseItem}>+</button>
            <span>{item.quantity}</span>
            <button className='btn' onClick={handleDecreaseItem}>-</button>
        </div>
    );
}

export default CartQuantity;