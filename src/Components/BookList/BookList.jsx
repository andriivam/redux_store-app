import React from 'react';
import BookListItem from '../BookListItem/BookListItem';
import './BookList.css';


export default function BookList({ books, onAddedToCart }) {
    return (
        <ul className="book-list">
            {books.map((book) =>
                <li key={book.id}>
                    <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)} />
                </li>
            )}
        </ul>
    );
}
