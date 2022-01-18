import React, { useState } from 'react';
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'; 
import { useFirestore } from '../../hooks/useFirestore';

const CartQuantity = ({ item }) => {
    // STATE
    const [counter, setCounter] = useState(1)
    const { dispatch, user, cart } = useAuthContext()
    const { updateDocument, updateDocumentInSubcollection, deleteDocumentInSubcollection } = useFirestore('cart')

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
    
    const handleIncreaseItemV2 = async () => {
        dispatch({ type : 'INCREASE_ITEM_QUANTITY', payload : item })
        await updateDocumentInSubcollection(user.uid, item.id, { quantity : item.quantity + 1})
    }

    const handleDecreaseItemV2 = async () => {
        dispatch({ type : 'DECREASE_ITEM_QUANTITY', payload : item })
        if(item.quantity === 1){
            dispatch({ type : 'REMOVE_ITEM', payload : item})
            await deleteDocumentInSubcollection(user.uid, item.id)
        } else{
            await updateDocumentInSubcollection(user.uid, item.id, { quantity : item.quantity - 1})
        }
    }

    return(
        <div className='quantity-controls'>
            <button className='btn' onClick={handleIncreaseItemV2}>+</button>
            <button className='btn' onClick={handleIncreaseItem}>+</button>
            <span>{item.quantity}</span>
            <button className='btn' onClick={handleDecreaseItem}>-</button>
            <button className='btn' onClick={handleDecreaseItemV2}>-</button>
        </div>
    );
}

export default CartQuantity;