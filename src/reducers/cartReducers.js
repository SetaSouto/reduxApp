"use strict";

export function cartReducers(state = {cart: []}, action) {
    function findIndexById(id) {
        return state.cart.findIndex((book) => book._id === id)
    }

    switch (action.type) {
        case 'ADD_TO_CART':
            return (findIndexById(action.payload._id) === -1) ?
                {cart: [...state.cart, action.payload]} :
                {...state};
            break;
        case 'DELETE_FROM_CART':
            let index = findIndexById(action.payload);
            return {cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)]};
            break;
        case 'INCREMENT_QUANTITY':
            index = findIndexById(action.payload);
            return index !== -1 ? {
                    cart: [
                        ...state.cart.slice(0, index),
                        {...state.cart[index], quantity: state.cart[index].quantity + 1},
                        ...state.cart.slice(index + 1)
                    ]
                } :
                {...state};
    }
    return state;
}