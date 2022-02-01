import { useState, useEffect } from "react"
import axios from 'axios'

// first argument to the useEffect, cfr App.js
const useFetch = url => {
    const [response, setResponse] = useState(null) // because it can be an object or an array
    const [error, setError] = useState(null) // but default, error is null
    const [isLoading, setIsLoading] = useState(false) // we are not fetching data
    const [options, setOptions] = useState({}) // options for the request, Empty request to avoid our request for breaking

    /**
     * We fetch data in 2 cases, when the component will be loaded or mounted or when another action get trigged,
     * like clicking a button.
     */
    const doFetch = (options = {}) => {
        console.log('Do fetch ....')
        // updating the #options state with the options data  getting from the App.js
        setOptions(options)
        // since the fetch process starts, we need to set the isLoading state to true
        setIsLoading(true)
    }

    // fetching data when the Component get mounted
    /**
     * Since we are passing something in the doFetch() from the App Componet, i.e we are getting some options
        Remember, for GET request, we won't pass anything and here it will be #default that will make axios nervous
        but we don't want axios to break that why by default #options will be an empty object on this side. 
    */

    /** working with API is a side Effect that's why we need useEffect to perform this task but we can make the Effect function
     * a async function since useEffect is always a sync function, so we need to create a #async function inside or outside the useEffect to perform the async stuffs
     */
    useEffect(() => {
        if(!isLoading) return // if isLoading is false, do not fetch anything
        
        // we need a try {} catch(){} to handle breaking request to avoid the application from breaking
        const fetchData = async () => {
            try {
                const res = await axios(url, options)
                setResponse(res.data)
            }catch(err) {
                const error = err.response ? err.response.data : "Server Error"
                setError(error)
            }
            
            // after fetching data we need to set isLoading to false, even if there was an error because the request has finished
            setIsLoading(false)

            // update the response state with data we got from the API
        }
        fetchData()
    
    }, [isLoading, options, url]) // we need to start fetching data only when doFetch is trigged and toFetch know that doFetch()
    // is trigged when isLoading is #true (i.e when isLoading changes) or when #options is different from {} but isLoading can change to false
    // and we don't need to re-render useEffet() or fetch data when isLoading is false so we need to prevent that at the beginning of the fetch process
    // NB-> All states and properties used in useEffetct() must be passed as dependecies
    return [{ response, error, isLoading}, doFetch]
}

export default useFetch