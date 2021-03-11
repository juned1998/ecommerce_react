import React from "react";
import { useSelector } from "react-redux";

import CheckoutItem from "./../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
    const { items, totalItems, products } = useSelector((state) => ({
        items: state.cart.items,
        totalItems: state.cart.totalItems,
        products: state.products.products,
    }));

    let checkoutItems = "Fetching your items...";
    let totalPrice = 0;
    if (items.length > 0) {
        checkoutItems = items.map((item) => {
            const product = products.find(
                (product) => product.id === parseInt(item.id)
            );

            totalPrice = totalPrice + product.price * item.qty;

            return (
                <CheckoutItem
                    image_url={product.image_url}
                    title={product.title}
                    quantity={item.qty}
                    price={product.price * item.qty}
                />
            );
        });
    } else {
        checkoutItems = <h1>No items in cart.</h1>;
    }
    return (
        <div className="container checkout">
            <h5>Total Items: {totalItems}</h5>
            <h5>Total price: {totalPrice}</h5>
            {checkoutItems}
        </div>
    );
};

export default Checkout;
