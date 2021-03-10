import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, img, price }) => {
    return (
        <div className="product-card" alt="product title">
            <img className="product-card__img" src={img} />
            <h3 className="product-card__name">{title}</h3>
            <div className="product-card__footer">
                <h5 className="product-card__footer__price">₹ {price}</h5>
                <a href={"#"} className="product-card__footer__view">
                    View product
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
