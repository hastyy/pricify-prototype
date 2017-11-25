import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { setSearchTerm } from '../actions/searchTerm';


class Header extends Component {
    state = {
        searchTerm: ''
    };

    onQueryChange = (e) => {
        const searchTerm = e.target.value;
        this.setState(() => ({searchTerm }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.setSearchTerm(this.state.searchTerm);
        this.props.history.push('/results');
    };

    render() {
        //if (!this.props.user) return <noscript />;

        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            {this.props.location.pathname !== '/search' &&
                            <Link to="/search">
                                <img src="/img/logo.png" className="brand"/>
                            </Link>}
                        </div>
                        <div className="col-md-10 d-flex align-items-center">
                            {this.props.location.pathname !== '/search' &&
                            <form className="w-100" onSubmit={this.onSubmit}>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by product..."
                                        value={this.state.query}
                                        onChange={this.onQueryChange}
                                    />
                                    <span className="input-group-addon p-0">
                                        <button 
                                            className="w-100 h-100 border-0 bg-light text-lg"
                                        >
                                            <i className="ion-android-search" />
                                        </button>
                                    </span>
                                </div>
                            </form>}
                        </div>
                        <div className="col-md-1 d-flex align-items-center">
                            <Link to="/list" className="btn btn-lg btn-outline-success">
                                Shopping List
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user
});

const mapDispatchToProps = (dispatch) => ({
    setSearchTerm: (searchTerm) => {
        dispatch(setSearchTerm(searchTerm));
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));