import {
    SET_USER_LISTS,
    CREATE_LIST,
    ADD_ITEM_TO_LIST,
    REMOVE_ITEM_FROM_LIST,
    SET_LIST_UNACTIVE
} from '../actions/shoppingLists';


export default (state = [], action) => {
    switch (action.type) {
        case SET_USER_LISTS:
            return action.shoppingLists.sort((l1, l2) => (
                l1.date < l2.date ? 1 : -1
            ));
        case CREATE_LIST:
            return [
                action.shoppingList,
                ...state.map(l => ({...l, active: false}))
            ];
        case ADD_ITEM_TO_LIST:
        case REMOVE_ITEM_FROM_LIST:
        case SET_LIST_UNACTIVE:
            const i = state.findIndex(l => l.id == action.shoppingList.id);
            return [
                ...state.slice(0, i),
                action.shoppingList,
                ...state.slice(i+1)
            ];
        default:
            return state;
    }
};