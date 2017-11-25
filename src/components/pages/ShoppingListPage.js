import React from 'react';

import ShoppingList from '../ShoppingList';
import ShoppingListsList from '../ShoppingListsList';


const ShoppingListPage = () => (
    <div className="page--session container-fluid">
        <div className="row">
            <div className="col-md-3">
                <ShoppingListsList />
            </div>
            <div className="col-md-9">
                <ShoppingList />
            </div>
        </div>
    </div>
);


export default ShoppingListPage;