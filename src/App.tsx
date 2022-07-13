import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Application'
import './App.less';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

export default App;
