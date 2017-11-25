import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import { setListActive } from '../actions/shoppingLists';

import getActiveShoppingList from '../selectors/shoppingLists';


class ShoppingListsList extends Component {
    setListActive = (list) => (e) => {
        e.preventDefault();

        this.props.setListActive(list, this.props.activeShoppingList);
    };

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>User Shopping Lists</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shoppingLists.map(l => (
                        <TableRow
                            key={l.id}
                            list={l}
                            onClick={this.setListActive(l)}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (store, props) => ({
    shoppingLists: store.shoppingLists,
    activeShoppingList: getActiveShoppingList(store.shoppingLists)
});

const mapDispatchToProps = (dispatch) => ({
    setListActive: (list, activeShoppingList) => {
        dispatch(setListActive(list, activeShoppingList));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListsList);


// List Item
const TableRow = ({ list, onClick }) => (
    <tr>
        <td>
            <div className="d-flex w-100 justify-content-between p-1">
                <button className="btn btn-sm btn-secondary">
                    {moment(list.date).format('MMMM Do YYYY')}
                </button>
                <a className="action-icon icon-side" href="#" onClick={onClick}>
                    <i className="ion-edit" />
                </a>
            </div>
        </td>
    </tr>
);