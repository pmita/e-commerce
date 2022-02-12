import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFirestore = (collection) => {
    // STATE
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)


    const addDocument = async (doc) => {
        // reset state pre-fetching
        setError(null)
        setIsPending(true)

        try{
            if(!isCancelled){
                await projectFirestore.collection(collection).add({ ...doc })
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

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

    return { 
        addDocument, 
        updateDocument, 
        isPending, 
        error };
}