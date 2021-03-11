import * as actionTypes from "./actionTypes";

export const addItem = (id, qty) => {
    return {
        type: actionTypes.ADD_ITEM_IN_CART,
        id,
        qty,
    };
};
