import React from "react";
import "./ProductDetail.css";
function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="product-detail__img">
                <img
                    src={
                        "https://m.media-amazon.com/images/I/71hKAblAn-L._AC_UL320_.jpg"
                    }
                    alt={"product"}
                />
            </div>
            <div className="product-detail__information">
                <h1 className="product-detail__title">
                    Bajaj Platini PX97 Torque 36-Litres Personal Air Cooler
                    (White)- for Medium Room
                </h1>
                <h5 className="product-detail__price">Price: ₹999</h5>

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
}

export default ProductDetail;
