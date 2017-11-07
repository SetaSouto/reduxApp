"use strict";

export function postBook(books) {
    return {
        type: "POST_BOOK",
        payload: books
    }
}

export function deleteBooks(ids) {
    return {
        type: "DELETE_BOOK",
        payload: ids
    }
}

export function updateBook(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}