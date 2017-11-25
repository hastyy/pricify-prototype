import axios from 'axios';

import BASE_URL from '../config';


export const SET_STORES = 'SET_STORES';

export const setStores = () => (dispatch) => {
    axios.get(`${BASE_URL}/stores`).then(res => {
        const stores = res.data;

        dispatch({
            type: SET_STORES,
            stores
        });
    });
};