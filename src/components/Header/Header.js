import React from "react";
import Cart from "./Cart";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h2>E-commerce</h2>
            <Cart />
        </div>
    );
}

export default Header;
