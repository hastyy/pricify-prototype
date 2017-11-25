import axios from 'axios';

import BASE_URL from '../config';


export const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = () => (dispatch) => {
    axios.get(`${BASE_URL}/products`).then(res => {
        const products = res.data;

        dispatch({
            type: SET_PRODUCTS,
            products
        });
    });
};