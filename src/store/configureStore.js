import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../reducers/user';
import searchTermReducer from '../reducers/searchTerm';
import productsReducer from '../reducers/products';
import storesReducer from '../reducers/stores';
import stockReducer from '../reducers/stock';
import shoppingListsReducer from '../reducers/shoppingLists';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            user: userReducer,
            searchTerm: searchTermReducer,
            products: productsReducer,
            stores: storesReducer,
            stock: stockReducer,
            shoppingLists: shoppingListsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};