import React from 'react'

const CheckoutSingleItem = ({ product }) => {
    return(
        <div className='checkout-single-item'>
            <div className='item-image'>
                <img src={product.product_image_path} alt={product.title} />
                <span>{product.quantity}</span>
            </div>
            <div className='item-details'>
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
            </div>
        </div>
    );
}

export default CheckoutSingleItem;