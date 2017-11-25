import React, { Component } from 'react';

import ResultsTable from '../ResultsTable';


export default class ResultsPage extends Component {
    render() {
        return (
            <div className="page--session container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <ResultsTable />
                    </div>
                </div>
            </div>
        );
    }
}