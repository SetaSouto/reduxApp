"use strict";
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import {addToCart} from "./actions/cartActions"
import {postBook, deleteBooks, updateBook} from "./actions/booksActions";
import logger from 'redux-logger';

// Create store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// BOOK ACTIONS
store.dispatch(postBook([
    {
        id: 1,
        title: "this is the book's title",
        description: "this is the book's description",
        price: 33.33
    },
    {
        id: 2,
        title: "this is the second book's title",
        description: "this is the second book's description",
        price: 50
    }
]));

store.dispatch(deleteBooks({id: 1}));

store.dispatch(updateBook({
    id: 2,
    title: 'Learn React in 24h'
}));

// CART ACTIONS
store.dispatch(addToCart([{id: 1}]));