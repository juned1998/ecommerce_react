import * as actionTypes from "../actions/actionTypes";

const initialState = {
    items: [],
    totalItems: 0,
};

const addItem = (state, id, qty) => {
    // Get item if present in cart
    const item = state.items.find((item) => item.id === id);

    if (item) {
        // If item already in cart increase quantity
        item.qty = item.qty + qty;
    } else {
        // If item not present, create new item
        state.items.push({ id, qty });
    }

    return state.items;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_IN_CART:
            return {
                ...state,
                items: addItem(state, action.id, action.qty),
                totalItems: state.totalItems + action.qty,
            };

        default:
            return state;
    }
};

export default reducer;
