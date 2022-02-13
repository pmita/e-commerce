import React from 'react'

const CheckoutPriceDetails = () => {
    return(
        <div className='checkout-price'>
            <ul className='subtotal-details'>
                <li>Subtotal</li>
                <li>$ 9.999</li>
            </ul>
            <ul className='subtotal-details'>
                <li>Shipping</li>
                <li>Calculated at the next step</li>
            </ul>
                
            <hr></hr>
                
            <ul className='subtotal-details'>
                <li>Total</li>
                <li>$ 9.999</li>
            </ul>
        </div>
    );
}

export default CheckoutPriceDetails;