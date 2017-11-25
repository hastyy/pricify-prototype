import { SET_SEARCH_TERM } from '../actions/searchTerm';


export default (state = '', action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return action.searchTerm;
        default:
            return state;
    }
};