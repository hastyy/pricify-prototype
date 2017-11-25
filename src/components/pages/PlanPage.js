import React, { Component } from 'react';
import { connect } from 'react-redux';

import Summary from '../Summary';

const MapView = ({ cost }) => (
    <div className="w-100 d-flex mb-3">
        <div className="w-50 d-flex flex-column">
            <div className="text-center border border-secondary">
                <h3 className="text-center mb-2">Estimated trip time:</h3>
                <p>12 minutes</p>
            </div>
            <div className="text-center border border-secondary">
                <h3 className="text-center mb-2">Total distance:</h3>
                <p>2.56 Km</p>
            </div>
            <div className="text-center border border-secondary">
                <h3 className="text-center mb-2">Trip cost:</h3>
                <p>3.56€</p>
            </div>
        </div>
        <div className="w-50 border border-secondary map-div" />
    </div>
);

class PlanPage extends Component {
    componentWillMount() {
        if (!this.props.user)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="page--session container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <MapView />
                        <Summary />
                        <div className="w-100 d-flex justify-content-end">
                            <button className="btn btn-secondary px-3 py-1">
                                Send to my phone
                            </button>
                            <button className="btn btn-secondary px-3 py-1 ml-3">
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(PlanPage);