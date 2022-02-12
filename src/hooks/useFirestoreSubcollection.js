import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useFirestoreSubcollection = (collection) => {
    // STATE
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [isCancelled, setIsCancelled] = useState(false)
    const ref = projectFirestore.collection(collection)

    const addDocumentInSubcollection = async (
        id, 
        subcollection, 
        subId, 
        doc
    ) => {
        // reset state pre-fetching
        setError(null)
        setIsPending(true)

        try{
            if(!isCancelled){
                await ref.doc(id)
                      .collection(subcollection)
                      .doc(subId)
                      .set({ ...doc });
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    const updateDocumentInSubcollection = async (
        id, 
        subcollection, 
        subId, 
        updates
    ) => {
        // reset state pre-fetching
        setIsPending(true)
        setError(null)

        try{
            if(!isCancelled){
                await ref.doc(id)
                      .collection(subcollection)
                      .doc(subId)
                      .update(updates)
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }

    }


    const deleteDocumentInSubcollection = async (
        id, 
        subcollection, 
        subId
    ) => {
        // reset state pre-fetching
        setIsPending(true)
        setError(null)

        try{
            if(!isCancelled){
                await ref.doc(id)
                      .collection(subcollection)
                      .doc(subId)
                      .delete()
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
        addDocumentInSubcollection, 
        updateDocumentInSubcollection, 
        deleteDocumentInSubcollection,
        isPending, 
        error };
}