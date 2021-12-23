import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth, projectFirestore } from '../firebase/config'

export const useSignup = () => {
    // STATE
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        // reset state before fetch request
        setIsPending(false)
        setError(null)

        try{
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)

            if(!response){
                throw new Error('Could not complete signup')
            }

            /*
                In case of no error, request was successful so we need to
                -> update user details
                -> add a new document under the users collection
                -> dispatch our SIGNIN action
            */

           
           await response.user.updateProfile({
               displayName : displayName
            })
            
            await projectFirestore.collection('users').doc(response.user.uid).set({
                online: true,
                displayName : displayName
            })
            
            dispatch({ type : 'SIGNUP', payload : response.user })

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signup, isPending, error }
}