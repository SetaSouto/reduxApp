/**
 * Books reducers.
 */
"use strict";

export function booksReducers(state = {
    books: [
        {
            _id: 1,
            title: "this is the book's title",
            description: "this is the book's description",
            price: 33.33
        },
        {
            _id: 2,
            title: "this is the second book's title",
            description: "this is the second book's description",
            price: 50
        }
    ]
}, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return {...state};
            break;
        case 'POST_BOOKS':
            return {books: [...state.books, ...action.payload]};
            break;
        case 'DELETE_BOOK':
            const books = [...state.books];
            const indexToDelete = books.findIndex((book) => book._id === action.payload._id);
            if (indexToDelete !== -1) {
                const newState = {...state};
                newState.books = [...books.slice(0, indexToDelete), ...books.slice(indexToDelete + 1)];
                return newState;
            } else {
                return state;
            }
            break;
        case 'UPDATE_BOOK':
            const indexToUpdate = state.books.findIndex((book) => book._id === action.payload._id);
            const bookUpdated = {...state.books[indexToUpdate], title: action.payload.title};
            const newState = {...state};
            newState.books = [...state.books.slice(0, indexToUpdate), bookUpdated, ...state.books.slice(indexToUpdate + 1)];
            return newState;
    }
    return state;
}