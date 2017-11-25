import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import {
    createShoppingList,
    removeProductFromShoppingList
} from '../actions/shoppingLists';

import getActiveShoppingList from '../selectors/shoppingLists';


class ShoppingList extends Component {
    editProduct = (product) => (e) => {
        e.preventDefault();
        this.props.history.push(`/product/${product.id}`);
    };

    removeProduct = (product) => (e) => {
        e.preventDefault();

        this.props.removeProductFromShoppingList(
            this.props.activeShoppingList,
            product
        );
    };

    createShoppingList = () => {
        this.props.createShoppingList(
            this.props.user.id,
            this.props.activeShoppingList
        );
    };

    render() {
        return (
            <div className="w-100">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="align-middle text-center">
                                Current Shopping List
                            </th>
                            <th className="align-middle text-center">
                                Quantity
                            </th>
                            <th className="align-middle text-center">
                                Store
                            </th>
                            <th className="align-middle text-center">
                                Price
                            </th>
                            <th className="align-middle text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.activeShoppingList.products.map(p => (
                            <TableRow 
                                key={p.id}
                                product={p}
                                editProduct={this.editProduct(p)}
                                removeProduct={this.removeProduct(p)}
                            />
                        ))}
                    </tbody>
                </table>
                <div className="w-100 d-flex justify-content-between">
                <button
                    className="btn btn-secondary px-3 py-1"
                    onClick={this.createShoppingList}
                >
                    Create New List
                </button>
                <button className="btn btn-secondary px-3 py-1">
                    Plan Route
                </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store, props) => ({
    user: store.user,
    activeShoppingList: getActiveShoppingList(store.shoppingLists)
});

const mapDispatchToProps = (dispatch) => ({
    removeProductFromShoppingList: (shoppingList, product) => {
        dispatch(removeProductFromShoppingList(shoppingList, product));
    },
    createShoppingList: (userId, activeShoppingList) => {
        dispatch(createShoppingList(userId, activeShoppingList));
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingList));


// TableRow
const TableRow = ({ product, editProduct, removeProduct }) => (
    <tr>
        <td className="align-middle">
            <img className="table-img" src={product.img} />
            <span className="h3 font-weight-normal">{product.name}</span>
        </td>
        <td className="align-middle text-center">
            1
        </td>
        <td className="align-middle text-center">
            <img className="table-img" src={product.store.img} />
        </td>
        <td className="align-middle text-center">
            {product.store.price / 100}€
        </td>
        <td className="align-middle text-center">
            <a className="action-icon" href="#" onClick={editProduct}>
                <i className="ion-edit" />
            </a>
            <a className="action-icon" href="#" onClick={removeProduct}>
                <i className="ion-close-round" />
            </a>
        </td>
    </tr>
);