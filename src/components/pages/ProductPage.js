import React, { Component } from 'react';

import SupermarketTable from '../SupermarketTable';


export default class ProductPage extends Component {
    render() {
        return (
            <div className="page--session container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <SupermarketTable />
                    </div>
                </div>
            </div>
        );
    }
}