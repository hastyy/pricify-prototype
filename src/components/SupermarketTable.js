import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { getProductById } from '../selectors/products';


class SupermarketTable extends Component {
    onClick = () => {
        // TODO dispatch add to list with this.props.product
        console.log('Store selected! Adding to list...');
    };

    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="align-middle text-center" colSpan={3}>
                            {this.props.stores.length} Results found for <u>{this.props.product.name}</u>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.stores.map(s => (
                        <TableRow
                            key={s.id}
                            store={s}
                            onClick={this.onClick}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

const getStores = (stores, stock, id) => {
    const result = [];
    for (let s of stock) {
        if (s.product == id) {
            let str = stores.find(str => str.id == s.store);
            result.push({
                ...str,
                price: s.price
            });
        }
    }
    return result;
};

const mapStateToProps = (store, props) => ({
    product: getProductById(store.products, props.match.params.id),
    stores: getStores(store.stores, store.stock, props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    //
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SupermarketTable));


// TableRow
const TableRow = ({ store, onClick }) => (
    <tr>
        <td className="align-middle">
            <img className="table-img" src={store.img} />
            <span className="h3 font-weight-normal">{store.name}</span>
        </td>
        <td className="align-middle text-center">{store.price / 100}€</td>
        <td className="align-middle text-center td__add" onClick={onClick}>
            <img src="/img/list.png" className="table-img table-img--list"/>
            <span className="table-img--list__text">Add</span>
        </td>
    </tr>
);