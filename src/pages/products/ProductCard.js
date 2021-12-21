import React from 'react'
import { Link } from 'react-router-dom'; // ROUTER

const ProductCard = ({ product }) => {
    return(
        <div className='product-card'>
            <img src={product.product_image_path} alt='product' />
            <div className='product-cardDetails'>
                <h4>{product.title}</h4>
                <h3>{product.price}</h3>
            </div>
            <button className='btn'>
                <Link to={`/products/${product.id}`}>
                    Ckeck Item
                </Link>
            </button>
        </div>
    );
}

export default ProductCard;