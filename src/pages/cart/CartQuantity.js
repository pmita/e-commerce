import React from 'react';
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
import { useFirestoreSubcollection } from '../../hooks/useFirestoreSubcollection';

const CartQuantity = ({ item }) => {
    // STATE
    const { dispatch, user } = useAuthContext()
    const { 
        updateDocumentInSubcollection, 
        deleteDocumentInSubcollection } = useFirestoreSubcollection('users')

    // EVENTS    
    const handleIncreaseItem = async () => {
        dispatch({ type : 'INCREASE_ITEM_QUANTITY', payload : item })
        await updateDocumentInSubcollection(
            user.uid, 
            'cart',
            item.id, 
            { quantity : item.quantity + 1}
        )
    }

    const handleDecreaseItem = async () => {
        dispatch({ type : 'DECREASE_ITEM_QUANTITY', payload : item })
        if(item.quantity === 1){
            dispatch({ type : 'REMOVE_ITEM', payload : item})
            await deleteDocumentInSubcollection(
                user.uid, 
                'cart',
                item.id
            )
        } else{
            await updateDocumentInSubcollection(
                user.uid, 
                'cart',
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