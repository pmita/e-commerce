import { useEffect, useState} from 'react'
import { projectFirestore } from '../firebase/config'

export const useSubCollection = (collection, docId , subCollection) => {
    // STATE
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // useEFFECT
    useEffect(() => {
        // reset our state pre-fetching
        setIsPending(true)
        setError(null)

        const unsubscribe = projectFirestore.collection(collection).doc(docId )
            .collection(subCollection).onSnapshot((snapshot) => {
                if(snapshot.empty){
                    setError('No items to load')
                    setIsPending(false)
                    setData(null);
                } else{
                    let results = [];
                    snapshot.forEach((doc) => {
                        results.push({ ...doc.data(), id : doc.id })
                    })
                    setData(results)
                    setIsPending(false)
                }
            }, (err) => {
                setIsPending(false)
                setError(err.message)
                console.log('Could not fetch data from subcollection on this occasion')
            })

            return () => unsubscribe()
    }, [collection, docId, subCollection])

    return { data, error, isPending };
}