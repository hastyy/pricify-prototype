import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import productsSelector from '../selectors/products';


class ResultsTable extends Component {
    onClick = (product) => () => {
        this.props.history.push(`/product/${product.id}`);
    };

    render() {
        return (
            <table className="table table-bordered">
                <thead className="mb-2">
                    <tr>
                        <th className="align-middle text-center">{this.props.products.length} Results Found</th>
                        <th className="align-middle text-center">Available in</th>
                        <th className="align-middle text-center">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.sort((p1, p2) => {
                        const price1 = this.props.bestPrices[p1.id];
                        const price2 = this.props.bestPrices[p2.id];
                        return price1 < price2 ? -1 : 1;
                    }).map(p => (
                        <TableRow 
                            key={p.id}
                            product={p}
                            storeCount={this.props.storeCounts[p.id]}
                            bestPrice={this.props.bestPrices[p.id]}
                            onClick={this.onClick(p)}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

const getStoreCounts = (stock) => {
    const counts = [];
    for (let s of stock) {
        if (!counts[s.product]) {
            counts[s.product] = 1;
        } else {
            counts[s.product] = counts[s.product] + 1;
        }
    }
    return counts;
};

const getBestPrices = (stock) => {
    const prices = [];
    for (let s of stock) {
        if (!prices[s.product]) {
            prices[s.product] = s.price;
        } else if (s.price < prices[s.product]) {
            prices[s.product] = s.price;
        }
    }
    return prices;
};

const mapStateToProps = (store) => ({
    products: productsSelector(store.products, store.searchTerm),
    storeCounts: getStoreCounts(store.stock),
    bestPrices: getBestPrices(store.stock)
});

const mapDispatchToProps = (dispatch) => ({
    //
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsTable));


// TableRow
const TableRow = ({ product, storeCount, bestPrice, onClick }) => (
    <tr className="results-tr" onClick={onClick}>
        <td className="align-middle">
            <img className="table-img" src={product.img} />
            <span className="h3 font-weight-normal">{product.name}</span>
        </td>
        <td className="align-middle text-center">{storeCount} Stores</td>
        <td className="align-middle text-center">{bestPrice / 100}€</td>
    </tr>
);