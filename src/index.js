import 'babel-polyfill'
import React from 'react'
import {render}  from 'react-dom'
import App from './containers/App'

render(
    <div style={{color: 'blue'}}>
        <App />
    </div>,
    document.getElementById('root')
);

module.hot.accept();