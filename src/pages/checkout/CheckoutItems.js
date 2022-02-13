import React from 'react';
//HOOKS
import { useAuthContext } from '../../hooks/useAuthContext';
import { useSubCollection } from '../../hooks/useSubCollection';
//COMPONENTS
import CheckoutSingleItem from './CheckoutSingleItem';
import CheckoutPriceDetails from './checkoutDetails/CheckoutPriceDetails';
import CheckoutApplyCoupon from './checkoutDetails/CheckoutApplyCoupon';

const CheckoutItems = () => {
    //STATE & VARIABLES
    const { user } = useAuthContext()
    const { data: products, error, isPending } = useSubCollection('users', user.uid, 'cart');
    
    return(
        <div className='checkout-items'>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className='checkout-items-grid'>
                {products && products.map((product) => (
                    <CheckoutSingleItem 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </div>

            <CheckoutApplyCoupon />

            <CheckoutPriceDetails />
        </div>
    );
}

export default CheckoutItems;