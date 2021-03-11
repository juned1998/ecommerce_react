import * as actionTypes from "../actions/actionTypes";

const initialState = {
    products: null,
    error: false,
    loading: false,
    allProductsLoaded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return {
                ...state,
                loading: true,
                error: false,
            };

        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
                error: false,
                loading: false,
                allProductsLoaded: true,
            };

        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: true,
                loading: false,
            };

        default:
            return state;
    }
};

export default reducer;
