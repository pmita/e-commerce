import React, { createContext, useReducer, useEffect } from 'react'
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

// REDUCER STATE & FUNCTION
const initialState = {
    user : null,
    authIsReady : false
}

const authReducer = (state, action) => {
    switch(action.type){
        case 'SIGNIN':
            return { ...state, user : action.payload };
        case 'SIGNUP':
            return { ...state, user : null };
        case 'AUTH_IS_READY':
            return { user : action.payload, authIsReady : true }
        default:
            return state;
    }
}

export const AuthContextProvider = ({ children }) => {
    // STATE
    const [state, dispatch] = useReducer(authReducer, initialState)

    // useEFFECT
    useEffect(() => {
        // initially we check if user is already signed in
        const unsubscribe = projectAuth.onAuthStateChanged((user) => {
            dispatch({ type : 'AUTH_IS_READY', payload : user })
        })

        return () => unsubscribe()
    })
    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}