import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/users')
    .then(response => {
        // updating the state to get data from the API
        setUsers(response.data)
    })
  }, [])

  return (<div>
      <h1>List of All posts : </h1>
      {users.map((user, index) => {
          return <h1 key={index}>{user.name}</h1>
      })}
  </div>);
}

export default App;
