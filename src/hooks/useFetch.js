import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = url => {

    // initially response is #null because we need our custom Hook to be more
    // scale in such a way it can accepts objects and array or more
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    /**
   * Since we need to support the CRUD functionally, we'll need another state that will be storing the current form our our request
   * and by default it will be {} because we do not want to specify GET method.
   * So {} will make axios not breaking
   */
    const [options, setOptions] = useState({})

    console.log('Hook starts')

    const doFetch = (options= {}) => {
        console.log('Custom Hook')
        setOptions(options)
        setIsLoading(true) // since our request has starting
    }

    /**
     * Since we are fetching data, we must use a useEffetch Hook because fetching data is a sideEffet.
     * And again, remember that useEffect must always a synchronous function BUT we need our fetch action
     * to be Asynchronous, so 2 options are possible, either writting our #async function within the effet part of useEffet 
     * or outside the useEffet Hook then call the #async function within.
     */
    useEffect(() => {
        /**
         * But isLoading can be set to false and since it changes it going to trigger useEffetct and we do not want this
         * we need to trigger the useEffect only when if isLoading is false
         */
        if(!isLoading) { // do anything if isLoading is false
            return
        }

        const fetchData = async () => {
            try {
                const res = await axios(url, options)
                setResponse(res.data)
            }catch(err) {
                const error = err.response ? err.response.data : 'Server error' 
                setError(error)
            }
            // after each fetch operation we need to set isLoading to false since we are no longer fetching something from the API
            setIsLoading(false)
        }

        fetchData()
        // when using some state of properties inside a useEffect, we need to pass them as dependencies
    }, [isLoading, url, options])  // we need to fetchData or trigger useEffect only when doFetch starts and toFetch start when isLoading is set to #false
     
    return [{response, error, isLoading}, doFetch]
}

export default useFetch
