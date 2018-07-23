import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import counter from './reducers'
import {Provider} from "react-redux"
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter)
const rootEl = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
    
        <App />
    </Provider>,
    rootEl
)
// registerServiceWorker();
