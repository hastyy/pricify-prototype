import axios from 'axios';
import moment from 'moment';

import BASE_URL from '../config';


export const SET_USER_LISTS = 'SET_USER_LISTS';
export const CREATE_LIST = 'CREATE_LIST';
export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';
export const REMOVE_ITEM_FROM_LIST = 'REMOVE_ITEM_FROM_LIST';
export const SET_LIST_UNACTIVE = 'SET_LIST_UNACTIVE';
export const SET_LIST_ACTIVE = 'SET_LIST_ACTIVE';

export const getUserShoppingLists = (userId) => (dispatch) => {
    axios.get(`${BASE_URL}/shoppingLists?user=${userId}`)
        .then(res => {
            const shoppingLists = res.data;
            
            dispatch({
                type: SET_USER_LISTS,
                shoppingLists
            });
        });
};

export const setListActive = (list, activeShoppingList) => (dispatch) => {
    if (list === activeShoppingList) return;

    axios.put(`${BASE_URL}/shoppingLists/${list.id}`, {
        ...list,
        active: true
    }).then(res => {
        const shoppingList = res.data;
        
        dispatch({
            type: SET_LIST_ACTIVE,
            shoppingList
        });

        // Unset the previous active shopping list
        return axios.put(`${BASE_URL}/shoppingLists/${activeShoppingList.id}`, {
            ...activeShoppingList,
            active: false
        });
    }).then(res => {
        const shoppingList = res.data;
        
        dispatch({
            type: SET_LIST_UNACTIVE,
            shoppingList
        });
    });
};

export const createShoppingList = (userId, activeShoppingList) => (dispatch) => {
    /*axios.put(`${BASE_URL}/shoppingLists/${activeShoppingList.id}`, {
        ...activeShoppingList,
        active: false
    }).then(res => {
        const shoppingList = res.data;

        dispatch({
            type: SET_LIST_UNACTIVE,
            shoppingList
        });

        return axios.post(`${BASE_URL}/shoppingLists`, {
            // Initial List State
            user: userId,
            active: true,
            date: moment.now(),
            products: []
        });
    });*/

    axios.post(`${BASE_URL}/shoppingLists`, {
        // Initial List State
        user: userId,
        active: true,
        date: moment.now(),
        products: []
    }).then(res => {
        const shoppingList = res.data;

        dispatch({
            type: CREATE_LIST,
            shoppingList
        });

        // Unset the previous active shopping list
        return axios.put(`${BASE_URL}/shoppingLists/${activeShoppingList.id}`, {
            ...activeShoppingList,
            active: false
        });
    }).then(res => {
        const shoppingList = res.data;
        
        dispatch({
            type: SET_LIST_UNACTIVE,
            shoppingList
        });
    });
};

export const createShoppingListOnRegister = (userId) => (dispatch) => {
    axios.post(`${BASE_URL}/shoppingLists`, {
        // Initial List State
        user: userId,
        active: true,
        date: moment.now(),
        products: []
    }).then(res => {
        const shoppingList = res.data;

        dispatch({
            type: CREATE_LIST,
            shoppingList
        });
    });
};

export const addProductToShoppingList = (shoppingList, product) => (dispatch) => {
    const i = shoppingList.products.findIndex(p => p.id == product.id);
    const products = i > -1 ? [
        ...shoppingList.products.slice(0, i),
        product,
        ...shoppingList.products.slice(i+1)
    ] : [
        ...shoppingList.products,
        product
    ];

    axios.put(`${BASE_URL}/shoppingLists/${shoppingList.id}`, {
        ...shoppingList,
        products
    }).then(res => {
        const shoppingList = res.data;

        dispatch({
            type: ADD_ITEM_TO_LIST,
            shoppingList
        });
    });
};

export const removeProductFromShoppingList = (shoppingList, product) => (dispatch) => {
    const i = shoppingList.products.findIndex(p => p.id == product.id);
    const products = [
        ...shoppingList.products.slice(0, i),
        ...shoppingList.products.slice(i+1)
    ];

    axios.put(`${BASE_URL}/shoppingLists/${shoppingList.id}`, {
        ...shoppingList,
        products
    }).then(res => {
        const shoppingList = res.data;

        dispatch({
            type: REMOVE_ITEM_FROM_LIST,
            shoppingList
        });
    });
};