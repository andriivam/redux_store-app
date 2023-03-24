import React from 'react';
import BookListContainer from '../BookList/BookListContainer';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';

export default function Home() {

    return (
        <>
            <BookListContainer />
            <ShoppingCartTable />
        </>
    )
}
