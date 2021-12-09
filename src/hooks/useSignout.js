import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth, projectFirestore } from "../firebase/config";

export const useSignout = () => {
    // STATE
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { user, dispatch } = useAuthContext()

    const signout = async () => {
        setIsPending(true)
        setError(null)

        try{
            // we need to change user status from online to offline before we sign the user out
            // reason why being we won't have access to the user object after we signout
            const { uid } = user
            await projectFirestore.collection('users').doc(uid).update({
                online : false
            })

            await projectAuth.signOut()

            dispatch({ type : 'SIGNOUT' })

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

    return { signout, isPending, error };
}