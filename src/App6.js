import React, { useEffect } from 'react';
import useFetch from './hooks/useFetch2';

const App = () => {
  const [{response, error, isLoading}, doFetch] = useFetch('http://localhost:3004/posts')

  // fetching data when the Component get mounted
    useEffect(() => {
        /**
         * since we need to make the fetch process flexible, we will need to pass an option that will be allowing
         * us to specify the type of request we need to pass, ex: POST,GET,PUT,UPDATEM...
         * But for GET request we are obliged to write GET since it's the default method
         */
        // doFetch({
        //     method:'post',
        //     data: {
        //         users : {
        //             firstName: 'Fred',
        //             lastName: 'Flintstone'
        //         }
        //     }
        // })

        // GET request
        doFetch() 
    }, [])

  console.log('response', response, error, isLoading)
  return (<div>
      <h1>Custom Hook</h1>
  </div>);
};

export default App;
