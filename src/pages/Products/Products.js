import React, { useState, useEffect } from "react";
import ProductCard from "./../../components/ProductCard/ProductCard";
import "./Products.css";

import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const { products, loading, error } = useSelector((state) => ({
        products: state.products.products,
        error: state.products.error,
        loading: state.products.loading,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchProducts());
    }, [dispatch]);

    // set this variable to loading
    let ProductCards = <h2>Loading</h2>;

    // map products into ProductCards
    if (products && loading === false) {
        ProductCards = products.map((product) => {
            return (
                <ProductCard
                    title={product.title}
                    img={product.image_url}
                    price={product.price}
                />
            );
        });
    } else if (error) {
        ProductCards = <h2>Something went wrong</h2>;
    }

    return <div className="products">{ProductCards}</div>;
};

export default Products;
