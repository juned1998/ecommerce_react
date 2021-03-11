import * as actionTypes from "./actionTypes";

export const getProducts = () => {
    return {
        type: actionTypes.GET_PRODUCTS,
    };
};

export const setProducts = (products) => {
    return {
        products,
        type: actionTypes.SET_PRODUCTS,
    };
};

export const setError = () => {
    return {
        type: actionTypes.SET_ERROR,
    };
};

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            // set Loading: true by dispatching getProducts
            dispatch(getProducts());

            // get data.json from public directory
            const response = await fetch("./data.json");
            const products = await response.json();

            // set products after getting json data
            dispatch(setProducts(products));
        } catch (err) {
            // Set error: true if error
            dispatch(setError());
        }
    };
};
