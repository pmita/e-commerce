import React from 'react'

const Product = ({ product }) => {
    return(
        <div className='product-card'>
            <img src={product.product_image_path} alt='product' />
            <div className='product-cardDetails'>
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
            </div>
        </div>
    );
}

export default Product;