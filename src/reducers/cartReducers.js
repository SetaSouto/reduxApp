"use strict";

export function cartReducers(state = {cart: []}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return (state.cart.findIndex((book) => book._id === action.payload._id) === -1) ?
                {cart: [...state.cart, action.payload]} :
                {...state};
            break;
        case 'DELETE_FROM_CART':
            const index = state.cart.findIndex((book) => book._id === action.payload);
            return {cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)]};
            break;
    }
    return state;
}