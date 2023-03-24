import React from 'react';
import './BookListItem.css';

export default function BookListItem({ book, onAddedToCart }) {
    const { title, author, price, coverImg } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImg} alt="book" />
            </div>
            <div className="book-details">
                <span className='book-title'>{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button onClick={onAddedToCart} className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}
