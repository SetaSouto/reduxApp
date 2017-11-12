"use strict";
// React imports
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// Redux imports
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
// Import components
import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer';
import BookForm from './components/pages/bookForm';
// Import React-Router
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Create store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


// Render components
render(
    <Provider store={store}>
        <Router>
            <div>
                <Menu/>
                <Route exact path="/" component={BooksList}/>
                <Route path="/admin" component={BookForm}/>
                <Footer/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);