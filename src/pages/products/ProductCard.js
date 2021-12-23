import React from 'react'
import { Link } from 'react-router-dom'; // ROUTER
import { useAuthContext } from '../../hooks/useAuthContext'; // CONTEXT
import { useFirestore } from '../../hooks/useFirestore';

const ProductCard = ({ product }) => {
    // STATE
    const { user, dispatch, cart } = useAuthContext()
    const { updateDocument } = useFirestore('users')

    // EVENTS
    const handleAddCart = async () => {
        dispatch({ type : 'ADD_ITEM', payload : product })

        await updateDocument( user.uid, { cart : [ ...cart, { product, quantity : 1 }] })
    }

    // FUNCTIONS
    const disableAddCart = () => {
        if(cart.find(item => item.id === product.id)) {
            return(
                <button 
                    className='btn'
                    onClick={handleAddCart}
                    disabled
                >
                    Already in Cart
                </button>
            );
        } else {
            return(
                <button 
                    className='btn'
                    onClick={handleAddCart}
                >
                    Add to cart
                </button>
            )
        }
    }
    return(
        <div className='product-card'>
            <Link to={`/products/${product.id}`}>
                <img src={product.product_image_path} alt='product' />
            </Link>
            <h6 className='product-price'>{product.price}</h6>
            <div className='product-cardDetails'>
                <h4>{product.title}</h4>
                {disableAddCart()}
            </div>
        </div>
    );
}

export default ProductCard;