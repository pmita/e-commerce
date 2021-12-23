import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFirestore = (collection) => {
    // STATE
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)

    const updateDocument = async (id, updates) => {
        // reset state pre-fetching
        setIsPending(true)
        setError(null)

        try{
            if(!isCancelled){
                await projectFirestore.collection(collection).doc(id).update(updates)
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { updateDocument, isPending, error };
}