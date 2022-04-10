
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        console.log('useEffect ran')
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
            console.log('ERROR :>> ', err);
            setError(err.message);
            setIsLoading(false)
        })
    }, [url])

    return { data, isLoading, error };
}

export default useFetch;