import React from 'react'
import { Link, useNavigate } from 'react-router-dom'; // ROUTER
import { useAuthContext } from '../../hooks/useAuthContext'; // CONTEXT
import { useFirestoreSubcollection } from '../../hooks/useFirestoreSubcollection';

const ProductCard = ({ product }) => {
    // STATE
    const { dispatch, user, cart } = useAuthContext()
    const { addDocumentInSubcollection } = useFirestoreSubcollection('users')
    const navigate = useNavigate()


    // EVENTS
    const handleAddCart = async () => {
        await addDocumentInSubcollection(
            user.uid, 
            'cart',
            product.id, 
            { ...product, quantity : 1 }
        );
        dispatch({ type : 'ADD_ITEM', payload : product })
    }

    // FUNCTIONS
    const redirectIfNotSignedIn = () => (
         <button 
            className='btn'
            onClick={() => navigate('/signin')}
            >
                Add to cart
        </button>
    )

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
                {user ? disableAddCart() : redirectIfNotSignedIn()}
            </div>
        </div>
    );
}

export default ProductCard;