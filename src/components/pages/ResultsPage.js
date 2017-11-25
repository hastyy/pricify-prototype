import React, { Component } from 'react';
import { connect } from 'react-redux';

import ResultsTable from '../ResultsTable';


class ResultsPage extends Component {
    componentWillMount() {
        if (!this.props.user)
            this.props.history.push('/');
    }

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

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(ResultsPage);