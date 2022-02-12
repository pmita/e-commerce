import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
    // STATE
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // useEFFECT
    useEffect(() => {
        // reset our state pre-fetching
        setIsPending(true)
        setError(null)

        const unsubscribe = projectFirestore.collection(collection)
            .onSnapshot((snapshot) => {
                if(snapshot.empty){
                    setError('No documents to load')
                    setIsPending(false)
                } else {
                    let results = [];
                    snapshot.forEach((doc) => {
                        results.push({ ...doc.data(), id : doc.id })
                    })
                    setData(results)
                    setIsPending(false)
                }
            }, (err) => {
                setError(err.message)
                console.log('Could not fetch data on this occasion')
            })

            return () => unsubscribe()
    }, [collection])

    return { data, error, isPending };
}