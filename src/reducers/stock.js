import { SET_STOCK } from '../actions/stock';


export default (state = [], action) => {
    switch (action.type) {
        case SET_STOCK:
            return action.stock;
        default:
            return state;
    }
};