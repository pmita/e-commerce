import React, { useState } from 'react'

const InputField = (props) => {
    //STATE & VARIABLES
    const { onChange, id, errorMessage, ...inputProps } = props
    const [focused, setFocused] = useState(false)

    //EVENTS
    const handleFocus = (e) => {
        setFocused(true)
    }
    return(
        <div className='formInput'>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <p>{errorMessage}</p>
        </div>
    );
}

export default InputField;