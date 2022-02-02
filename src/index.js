import React from 'react'
import ReactDom from 'react-dom'
// import App from './App'
import Routing from './Routes'

ReactDom.render(
    <React.StrictMode>
        <Routing />        
    </React.StrictMode>,
    document.querySelector('#root')
)