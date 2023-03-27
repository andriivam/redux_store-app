import React, { useEffect } from 'react';
import './BookList.css';
import { connect } from 'react-redux';
import withBookStoreService from '../HOC/BookStoreService';
import { fetchBooks, bookAddedToCart } from '../../Actions';
import compose from '../../Utils/index';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import BookList from './BookList';

function BookListContainer(props) {

    const { fetchBooks } = props;

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    const { books, loading, error, onAddedToCart } = props;

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <ErrorIndicator />
    }

    return (
        <BookList books={books} onAddedToCart={onAddedToCart} />
    );

}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookStoreService }) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

// export default withBookStoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList)
// );