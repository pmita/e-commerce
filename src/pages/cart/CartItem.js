import React, {useState} from 'react'
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'

const CartItem = ({ item }) => {
    // STATE
    const [counter, setCounter] = useState(1)
    const { dispatch } = useAuthContext()

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleRemove = () => {
        dispatch({ type : 'REMOVE_ITEM', payload : item })
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
                <button onClick={handleRemove}>
                    Remove
                </button>
            </div>
            <div className='cart-item-quantity'>
                <h4>Quantity</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='number'
                        value={counter}
                        onChange={(e) => setCounter(e.target.value)}
                    />
                </form>
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