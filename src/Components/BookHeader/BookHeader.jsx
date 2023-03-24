import React from 'react';
import './BookHeader.css';
import { Link } from 'react-router-dom';

export default function BookHeader({ numItems, total }) {
    return (
        <header className="shop-header">
            <Link to="/" className="logo-link">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/cart" className="logo-link">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart"></i>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}
