"use strict";

export function getBooks() {
    return {
        type: "GET_BOOKS"
    }
}

export function postBooks(books) {
    return {
        type: "POST_BOOKS",
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