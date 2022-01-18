import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext' // HOOKS
import { useFirestore } from '../../hooks/useFirestore'
import CartQuantity from './CartQuantity' // COMPONENTS

const CartItem = ({ item }) => {
    // STATE
    const { dispatch, user, cart } = useAuthContext()
    const { updateDocument } = useFirestore('cart')

    // EVENTS
    const handleRemove = async () => {
        dispatch({ type : 'REMOVE_ITEM', payload : item })
        await updateDocument(user.displayName, { 
            cart : [ ...cart ]
        })
    }

    // FUNCTIONS
    const calculateItemTotal = () => {
        const total = (item.price * item.quantity)
        return total;
    }
    return(
        <div className='cart-item'>
            <img src={item.product_image_path} alt='product with grey background' />
            <div className='cart-item-details'>
                <h4>{item.title}</h4>
                <h6 onClick={handleRemove}>
                    Remove
                </h6>
            </div>
            <div className='cart-item-quantity'>
                <h4>Quantity</h4>
                <CartQuantity item={item} />
            </div>
            <div className='cart-item-price'>
                <h4>Price</h4>
                <h3>$ {item.price}</h3>
            </div>
            <div className='cart-item-total'>
                <h4>Total</h4>
                <h3>$ {calculateItemTotal()}</h3>
            </div>
        </div>
    );
}

export default CartItem;