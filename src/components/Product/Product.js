import React from "react";

import "./Product.css";

const Product = (props) => {
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
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className="product-detail__addToCart">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
