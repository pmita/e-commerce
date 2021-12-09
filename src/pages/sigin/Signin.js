import React, { useState } from 'react'
import { useSignin } from '../../hooks/useSignin' //HOOKS
import { useNavigate } from 'react-router' // ROUTER

const Signin = () => {
    // STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signin, isPending, error } = useSignin()
    const navigate = useNavigate()

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        signin(email, password)
        navigate('/')
    }

    return(
        <div className='signin-page'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email: </span>
                    <input
                        required
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password: </span>
                    <input
                        required
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                {!isPending && <button className='btn'>Sign in</button>}
                {isPending && <button className='btn' disabled>Loading...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
}

export default Signin;