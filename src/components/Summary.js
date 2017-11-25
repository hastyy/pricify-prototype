import React from 'react';
import { connect } from 'react-redux';

import getActiveShoppingList from '../selectors/shoppingLists';


const Summary = (props) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th className="align-middle text-center">
                    Next Stop
                </th>
                <th className="align-middle text-center">
                    Distance
                </th>
                <th className="align-middle text-center">
                    Items
                </th>
                <th className="align-middle text-center">
                    Total
                </th>
            </tr>
        </thead>
        <tbody>
            {props.stores.map(s => (
                <TableRow
                    key={s.name}
                    store={s}
                    distance={(2.56 / props.stores.length).toFixed(2)}
                />
            ))}
        </tbody>
    </table>
);

const mapStateToProps = (store) => ({
    stores: (() => {
        const stores = {};
        for (let p of getActiveShoppingList(store.shoppingLists).products) {
            if (!stores[p.store.id]) {
                stores[p.store.id] = {
                    img: p.store.img,
                    name: p.store.name,
                    total: 0,
                    items: []
                };
            }
            const str = stores[p.store.id];
            str.total = str.total + p.store.price;
            str.items.push(p.name);
        }
        return Object.keys(stores).map(k => stores[k]);
    })()
});


export default connect(mapStateToProps)(Summary);


// Table Row
const TableRow = ({ store, distance }) => (
    <tr>
        <td className="align-middle">
            <img className="table-img" src={store.img} />
            <span className="h3 font-weight-normal">{store.name}</span>
        </td>
        <td className="align-middle text-center">
            {distance} Km
        </td>
        <td className="align-middle">
            <ul>
                {store.items.map(i => (
                    <li key={i}>1x {i}</li>
                ))}
            </ul>
        </td>
        <td className="align-middle text-center">
            {store.total / 100}€
        </td>
    </tr>
);