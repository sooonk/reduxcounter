import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './Contact.js';
import About from './About';


export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>)
}
