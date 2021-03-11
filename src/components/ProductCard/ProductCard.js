import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    return (
        <div className="product-card" alt="product title">
            <img
                className="product-card__img"
                src={props.img}
                alt={props.title + " image"}
            />
            <h3 className="product-card__name">{props.title}</h3>
            <div className="product-card__footer">
                <h5 className="product-card__footer__price">₹ {props.price}</h5>
                <Link
                    to={"/" + props.id}
                    className="product-card__footer__view"
                >
                    View product
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
