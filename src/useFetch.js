
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        const abortController = new AbortController();
        console.log('useEffect init')
        fetch(url).then((res) => {

            console.log('response :>> ', res);
            if (!res.ok) {
                throw Error("Could not fetch the requested resource");
            }
            return res.json();
        }).then((data) => {
            console.log('data :>> ', data);
            setData(data)
            setIsLoading(false);
            setError(null)

        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                console.log('ERROR :>> ', err);
                setIsLoading(false)
                setError(err.message);
            }
        })
        // abort the fetch
        return () => abortController.abort();
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;