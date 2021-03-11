import React from "react";
import Cart from "./Cart";
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h2>
                <Link to="/">E-commerce</Link>
            </h2>
            <Cart />
        </div>
    );
}

export default Header;
