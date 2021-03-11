import React from "react";
import "./CheckoutItem.css";

const CheckoutItem = (props) => {
    return (
        <div className="checkout-item">
            <div className="checkout-item__product-img">
                <img src={props.image_url} alt={props.title + " image"} />
            </div>
            <div className="checkout-item__product-info">
                <h2>{props.title}</h2>
                <h4>Quantity: {props.quantity}</h4>
                <h4>Total price: {props.price}</h4>
            </div>
        </div>
    );
};

export default CheckoutItem;
