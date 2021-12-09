import React, { useState } from 'react'
import { useSignup } from '../../hooks/useSignup' // HOOKS
import { useNavigate } from 'react-router'

const Signup = () => {
    // STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { signup, isPending, error } = useSignup()
    const navigate = useNavigate()

    // EVENTS
    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
        navigate('/')
    }

    return(
        <div className='signup-page'>
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
                <label>
                    <span>Username: </span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                {!isPending && <button className='btn'>Sign Up</button>}
                {isPending && <button className='btn' required>Loading...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
}

export default Signup;