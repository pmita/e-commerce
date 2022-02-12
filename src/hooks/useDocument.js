import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config' // FIREBASE

export const useDocument = (collection, id) => {
    // STATE
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // useEFFECT
    useEffect(() => {
        // reset state pre-fetching
        setError(null)
        setIsPending(true)

        const unsubscribe = projectFirestore.collection(collection).doc(id)
            .onSnapshot((snapshot) => {
                if(snapshot.exists){
                    setData({ ...snapshot.data(), id : snapshot.id })
                    setIsPending(false)
                    setError(null)
                } else {
                    setIsPending(false)
                    setError('This product does not exist')
                }
            }, (err) => {
                setIsPending(false)
                setError(err.message)
            })

        return () => unsubscribe()
    }, [collection, id])

    return { data, error, isPending };
}