import React, { useEffect } from 'react';
import useFetch from './hooks/useFetch';

function App() {

  // calling the custom useFetch hook, remember that a hook accepts only one argument
  // and in our case that argument is going to be the URL to the API
  
  /**
   * - doFetch because we do not only fetch data when the component is mounted,
   *    we can fetch data also when the user click a button, so doFetch is a good name for in both cases
   * 
   * - {response, error, isLoading}, initially the response will be an empty object or array that we will be filling processively
   *    , error will be the error HTTP error and Erro that will be defining and isLoading will be terminning whether data is available or not
   * 
   */

    const [{response, error, isLoading}, doFetch] = useFetch('http://localhost:3004/posts')
      console.log("App", response, error, isLoading)

    useEffect(() => {
        doFetch({
            method : 'post',
            data : {
                user : {}
            }
        })
    }, [])

  return (<div>
      <h1>hello</h1>
  </div>);
}

export default App;
