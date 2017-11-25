import axios from 'axios';

import BASE_URL from '../config';


export const SET_STOCK = 'SET_STOCK';

export const setStock = () => (dispatch) => {
    axios.get(`${BASE_URL}/stock`).then(res => {
        const stock = res.data;

        dispatch({
            type: SET_STOCK,
            stock
        });
    });
};