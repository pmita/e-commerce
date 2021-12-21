import React, { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config';
import Product from './Product';

const Products = () => {
    //STATE
    const [products, setProducts] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        // reset our state pre-fetching
        setIsPending(true)
        setError(null)

        const unsubscribe = projectFirestore.collection('products')
            .onSnapshot((snapshot) => {
                if(snapshot.empty){
                    setError('No documents cto load')
                    setIsPending(false)
                } else {
                    let results = [];
                    snapshot.forEach((doc) => {
                        results.push({ ...doc.data(), id : doc.id })
                    })
                    setProducts(results)
                    setIsPending(false)
                }
            }, (err) => {
                setError(err.message)
                console.log('Could not fetch data on this occasion')
            })

            return () => unsubscribe()
    }, [])

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