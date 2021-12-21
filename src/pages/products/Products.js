import React, { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'; // FIREBASE
import Product from './Product'; // COMPONENTS
import { useCollection } from '../../hooks/useCollection';

const Products = () => {
    //STATE
    const { data: products, error, isPending } = useCollection('products');


    return(
        <section className='products-container'>
            <h2>Products</h2>
            <h4>Order it for you or for your beloved ones</h4>
            {isPending && <p>Items Loading...</p>}
            {error && <p className='error'>{error}</p>}
            <div className='products'>
                {products && products.map((product) => <Product product={product} />)}
            </div>
        </section>
    );
}

export default Products;