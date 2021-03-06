import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import * as actions from "./../../store/actions/index";

import Product from "./../../components/Product/Product";

const ProductDetail = () => {
    // Extracting id from url
    const { id } = useParams();

    // getting product from products reducer
    const { products, allProductsLoaded } = useSelector((state) => ({
        products: state.products.products,
        allProductsLoaded: state.products.allProductsLoaded,
    }));

    const dispatch = useDispatch();

    // If state not initialized, dispatch fetch products action
    useEffect(() => {
        if (!allProductsLoaded) dispatch(actions.fetchProducts());
    }, []);

    let productSingle = "Fetching product...";

    if (allProductsLoaded) {
        productSingle = products.find((product) => product.id === parseInt(id));
        productSingle = productSingle ? (
            <Product
                id={productSingle.id}
                title={productSingle.title}
                image_url={productSingle.image_url}
                price={productSingle.price}
            />
        ) : null;

        if (!productSingle) {
            productSingle = <h1>Product not found</h1>;
        }
    }

    return <div className="container">{productSingle}</div>;
};

export default ProductDetail;
