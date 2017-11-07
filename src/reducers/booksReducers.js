/**
 * Books reducers.
 */
"use strict";

export function booksReducers(state = {books: []}, action) {
    switch (action.type) {
        case 'POST_BOOK':
            return {books: [...state.books, ...action.payload]};
            break;
        case 'DELETE_BOOK':
            const books = [...state.books];
            const indexToDelete = books.findIndex((book) => book.id === action.payload.id);
            if (indexToDelete !== -1) {
                const newState = {...state};
                newState.books = [...books.slice(0, indexToDelete), ...books.slice(indexToDelete + 1)];
                return newState;
            } else {
                return state;
            }
            break;
        case 'UPDATE_BOOK':
            const indexToUpdate = state.books.findIndex((book) => book.id === action.payload.id);
            const bookUpdated = {...state.books[indexToUpdate], title: action.payload.title};
            const newState = {...state};
            newState.books = [...state.books.slice(0, indexToUpdate), bookUpdated, ...state.books.slice(indexToUpdate + 1)];
            return newState;
    }
    return state;
}