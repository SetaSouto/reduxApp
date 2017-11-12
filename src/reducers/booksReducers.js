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
            const indexToDelete = state.books.findIndex((book) => book._id === action.payload);
            return indexToDelete === -1 ? {...state} :
                {...state, books: [...state.books.slice(0, indexToDelete), ...state.books.slice(indexToDelete + 1)]};
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