import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./../../store/actions/index";

import "./Product.css";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const addItemInCart = () => {
        dispatch(actions.addItem(props.id, quantity));
    };

    return (
        <div className="product-detail">
            <div className="product-detail__img">
                <img src={props.image_url} alt={"product"} />
            </div>
            <div className="product-detail__information">
                <h1 className="product-detail__title">{props.title}</h1>
                <h5 className="product-detail__price">Price: ₹{props.price}</h5>

                <div className="product-detail__footer">
                    <div className="product-detail__quantity">
                        <h5>Quantity: </h5>
                        <button
                            onClick={() => {
                                setQuantity(quantity - 1);
                            }}
                            disabled={quantity <= 1 ? true : false}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => {
                                setQuantity(quantity + 1);
                            }}
                        >
                            +
                        </button>
                    </div>
                    <button
                        className="product-detail__addToCart"
                        onClick={addItemInCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
