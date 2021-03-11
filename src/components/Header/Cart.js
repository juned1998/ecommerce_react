import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { totalItems } = useSelector((state) => ({
        totalItems: state.cart.totalItems,
    }));

    return (
        <div className="cart">
            <h4>
                <Link to="/checkout">Your Cart: {totalItems}</Link>
            </h4>
        </div>
    );
};

export default Cart;
