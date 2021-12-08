import React, { useState } from 'react'

const Signup = () => {
    // STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    return(
        <div className='login-page'>
            <form>
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
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default Signup;