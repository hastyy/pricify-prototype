import React, { Component } from 'react';
import { connect } from "react-redux";

import { setSearchTerm } from '../../actions/searchTerm';
import { setProducts } from '../../actions/products';
import { setStores } from '../../actions/stores';
import { setStock } from '../../actions/stock';


class SearchPage extends Component {
    state = {
        searchTerm: ''
    };

    checkStorePropAndFetch = (prop) => {
        if (this.props[prop.toLowerCase()].length > 0) return;
        this.props[`set${prop}`]();
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

    componentWillMount() {
        this.checkStorePropAndFetch('Products');
        this.checkStorePropAndFetch('Stores');
        this.checkStorePropAndFetch('Stock');
    }

    componentWillMount() {
        if (!this.props.user)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="page--session container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <img 
                            src="img/logo.png"
                            className="page__logo rounded mx-auto mb-5 d-block"
                        />
                        <form onSubmit={this.onSubmit}>
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    user: store.user,
    products: store.products,
    stores: store.stores,
    stock: store.stock
});

const mapDispatchToProps = (dispatch) => ({
    setSearchTerm: (searchTerm) => {
        dispatch(setSearchTerm(searchTerm));
    },
    setProducts: () => {
        dispatch(setProducts());
    },
    setStores: () => {
        dispatch(setStores());
    },
    setStock: () => {
        dispatch(setStock());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);