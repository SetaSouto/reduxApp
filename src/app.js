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

// Create store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);


// Render components
render(
    <Provider store={store}>
        <div>
            <Menu/>
            <BooksList/>
            <Footer/>
        </div>
    </Provider>,
    document.getElementById('app')
);