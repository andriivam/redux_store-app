import React, { useContext } from 'react';
import { BookStoreContext } from '../BookStoreContext/BookStoreContext';

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        const bookStoreService = useContext(BookStoreContext);
        return <Wrapped {...props} bookStoreService={bookStoreService} />;
    };
};

export default withBookStoreService;