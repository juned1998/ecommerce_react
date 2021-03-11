import React, { useEffect } from "react";
import ProductCard from "./../../components/ProductCard/ProductCard";
import "./Products.css";

import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    // getting states from products reducer
    const { products, loading, error } = useSelector((state) => ({
        products: state.products.products,
        error: state.products.error,
        loading: state.products.loading,
    }));

    const dispatch = useDispatch();

    // dispatching fetching products action
    useEffect(() => {
        dispatch(actions.fetchProducts());
    }, []);

    // intialize this variable to loading
    let ProductCards = <h2>Fetching Products...</h2>;

    // map products into ProductCards
    if (products && loading === false) {
        ProductCards = products.map((product) => {
            return (
                <ProductCard
                    key={product.id}
                    id={product.id}
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
