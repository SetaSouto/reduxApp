"use strict";

export function addToCart(book) {
    return {
        type: "ADD_TO_CART",
        payload: book
    }
}

export function deleteFromCart(bookId) {
    return {
        type: "DELETE_FROM_CART",
        payload: bookId
    }
}