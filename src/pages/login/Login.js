import React, { useState } from 'react'

const Login = () => {
    // STATE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;