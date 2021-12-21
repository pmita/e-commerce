import React, { useState } from 'react'
import { useDocument } from '../../hooks/useDocument' // FIREBASE
import { useParams } from 'react-router-dom' // ROUTER

const Product = () => {
    // STATE
    const { id } = useParams()
    const { data:product, error, isPending} = useDocument('products', id)
    const [counter, setCounter] = useState(1);

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // FUNCTIONS
    const conditionalRender = () => {
        return(
            <>
                <section className='product-page-left'>
                    <img src={product.product_image_path} alt='our brand product' />
                    <p>All hand-made with natural soy wax, CandleLEaf is made for your pleasure moments</p>
                </section>
                <section className='product-page-right'>
                    <h2>{product.title}</h2>
                    <h2>{product.price}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='number'
                            value={counter}
                            onChange={(e) => setCounter(e.target.value)}
                        />
                    </form>
                    <button className='btn'>Add to Cart</button>
                    <ul className='product-details'>
                        <li>
                            <span>Wax</span> {product.wax_type}
                        </li>
                        <li>
                            <span>Fragrance</span> {product.fragrance_type}
                        </li>
                        <li>
                            <span> Burning Time: </span>{product.burning_time} 
                            <span> Dimensions: </span>{product.dimensions} 
                            <span> Weight: </span>{product.weight} 
                        </li>
                    </ul>
                </section>
            </>
        )
    }
    return(
        <div className='product-page'>
            {isPending && <p>Data Loading...</p>}
            {error && <p className='error'>{error}</p>}
            {product && conditionalRender()}
        </div>
    );
}

export default Product;