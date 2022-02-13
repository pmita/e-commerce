import React, { useState } from 'react'

const CheckoutApplyCoupon = () => {
    //STATE & VARIABLES
    const [couponCode, setCouponCode] = useState('')

    //EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <form className='coupon-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Coupon code'
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className='btn'>Add Code</button>
        </form>
    );
}

export default CheckoutApplyCoupon;