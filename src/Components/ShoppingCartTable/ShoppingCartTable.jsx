import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCartTable.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, idx) => {
        const { id, title, count, total } = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        aria-label='Delete'
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-end">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        aria-label='Add'
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-end">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        aria-label='Remove'
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-end">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase${id}`);
        },
        onDecrease: (id) => {
            console.log(`Decrease${id}`);
        },
        onDelete: (id) => {
            console.log(`Delete${id}`);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);