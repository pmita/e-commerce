import React, { createContext, useReducer, useEffect } from 'react'
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

// REDUCER STATE & FUNCTION
const initialState = {
    user : null,
    authIsReady : false,
    cart : []
}

const authReducer = (state, action) => {
    const { cart } = state
    switch(action.type){
        case 'SIGNIN':
            return { ...state, user : action.payload };
        case 'SIGNUP':
            return { ...state, user : action.payload };
        case 'SIGNOUT':
            return { ...state, user : null };
        case 'AUTH_IS_READY':
            return { ...state, user : action.payload, authIsReady : true }
        case 'ADD_ITEM':
            if(!cart.find((item) => item.id === action.payload.id)){
                cart.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            return { ...state, cart : [...cart] };
        case 'REMOVE_ITEM':
            const newCart = cart.filter((item) => item.id !== action.payload.id)
            return { ...state, cart : [ ...newCart ]};
        case 'INCREASE_ITEM_QUANTITY':
            cart[cart.findIndex((item) => item.id === action.payload.id)].quantity++
            return { ...state, cart : [...cart] };
        case 'DECREASE_ITEM_QUANTITY':
            cart[cart.findIndex((item) => item.id === action.payload.id)].quantity--
            return { ...state, cart : [...cart] };
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
    }, [])

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}