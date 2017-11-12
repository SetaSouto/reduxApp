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

export function deleteBook(id) {
    return {
        type: "DELETE_BOOK",
        payload: id
    }
}

export function updateBook(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}