import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useSignin = () => {
    // STATE
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signin = async (email, password) => {
        setIsPending(true)
        setError(null)

        try{
            const response = projectAuth.signInWithEmailAndPassword(email, password)

            await projectFirestore.collection('users').doc(response.user.uid).update({
                online : true
            })

            dispatch({ type : 'LOGIN', payload : response.user })

            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        } catch(err){
            if(!isCancelled){
                setIsPending(false)
                setError(err.message)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signin, isPending, error };
}