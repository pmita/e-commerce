import React, { useState } from 'react'
//COMPONENTS
import CheckoutItems from './CheckoutItems';
import { Link, useNavigate } from 'react-router-dom' //ROUTER
import InputField from '../../components/InputField';

const CheckoutDetails = () => {
    //STATE & VARIABLES
    const [addressValues, setAddressValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        postCode: '',
    })
    const navigate = useNavigate()

    const addressInputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            required: true,
            errorMessage: 'Please enter a valid email address'
        },
        {
            id: 2,
            name: 'firstName',
            type: 'text',
            placeholder: 'First Name',
            required: true,
            errorMessage: 'Please enter less than 15 characters',
            pattern: `[a-z]{1,15}`
        },
        {
            id: 3,
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            required: true,
            errorMessage: 'Please enter less than 15 characters',
            pattern: `[a-z]{1,15}`
        },
        {
            id: 4,
            name: 'address',
            type: 'text',
            placeholder: 'Line of Address',
            required: true
        },
        {
            id: 5,
            name: 'city',
            type: 'text',
            placeholder: 'City',
            required: true,
        },
        {
            id: 6,
            name: 'coutry',
            type: 'text',
            placeholder: 'Country',
            required: true
        },
        {
            id: 7,
            name: 'postCode',
            type: 'text',
            placeholder: 'Post Code',
            required: true,
            errorMessage: 'Please enter a valid UK post code',
            pattern: `^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$`
        },
    ]

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/checkout-shipping')
    }

    const onChange = (e) => {
        setAddressValues({ ...addressValues, [e.target.name] : e.target.value })
    }


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
                    <label>Your Details</label>
                    {addressInputs.map((input) => (
                        <InputField
                            key={input.id}
                            {...input}
                            value={addressValues[input.name]}
                            onChange={onChange}
                        />
                    ))}

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