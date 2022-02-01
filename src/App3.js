import React, { useEffect } from 'react';
import useFetch from './hooks/useFetch2'; 

function App() {
  const [{data, error, isLoading}, doFetch] = useFetch('http://localhost:3004/posts');

  console.log(data, error, isLoading)

  useEffect(() => {
      doFetch({
          method: 'post',
          data: {
              
          }
      })
  }, [])

  return <div>
      <h1>CUSTOM HOOK - useFetch()</h1>
  </div>;
}

export default App;
