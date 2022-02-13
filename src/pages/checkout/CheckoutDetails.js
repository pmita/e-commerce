import React, { useState } from 'react'
//COMPONENTS
import CheckoutItems from './CheckoutItems';
import { Link, useNavigate } from 'react-router-dom' //ROUTER

const CheckoutDetails = () => {
    //STATE & VARIABLES
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState('')
    const navigate = useNavigate()

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/checkout-shipping')
    }

    console.log('hurray');

    return(
        <div className='cart-details'>
            <div className='cart-details-left'>

                <ul className='checkout-pages'>
                    <li>
                        <span className='success'>Cart</span>
                    </li>
                    <li>
                        <span className='current'>Details</span>
                    </li>
                    <li>
                        <span>Shipping</span>
                    </li>
                    <li>
                        <span>Payment</span>
                    </li>      
                </ul>

                <form onSubmit={handleSubmit}>
                    <label>Shipping Address</label>
                    <input
                        type='email'
                        required
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Shipping Address</label>
                    <div className='address-block'>
                        <input
                            type='text'
                            required
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            required
                            placeholder='Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <input
                        type='text'
                        required
                        placeholder='Address and Number'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <div className='postcode-block'>
                        <input
                            type='text'
                            placeholder='City'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            type='text'
                            required
                            placeholder='Post Code'
                            value={postCode}
                            onChange={(e) => setPostCode(e.target.value)}
                        />
                    </div>

                    <input
                        type='text'
                        required
                        placeholder='Select Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />

                    <div className='details-actions'>
                        <Link to='/cart' className='clasicLink'>
                            Back to cart
                        </Link>
                        <button className='btn'>
                            Go to Shippings
                        </button>
                    </div>
                </form>
            </div>
            <CheckoutItems />
        </div>
    );
}

export default CheckoutDetails;