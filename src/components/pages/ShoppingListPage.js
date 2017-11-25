import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShoppingList from '../ShoppingList';
import ShoppingListsList from '../ShoppingListsList';


class ShoppingListPage extends Component {
    componentWillMount() {
        if (!this.props.user)
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="page--session container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <ShoppingListsList />
                    </div>
                    <div className="col-md-10">
                        <ShoppingList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(ShoppingListPage);