import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Router from './Router';

const myState = {
    count: 0,
    email: '',
}
const reducer = (state = myState,action) => {
    switch (action.type) {
        case 'ADD_EMAIL':
            return state = {...state, email: action.email}
        case 'INCREMENT':
            return state = {...state, count: state.count + 1};
        case 'DECREMENT':
            return state = {...state, count: state.count - 1};
        default:
            return state;
    }

};

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
    
    <Provider store={store}>
        <Router>
        <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
