import { CREATE_ENTITY } from '../actions/create';
import { FETCH_ENTITIES } from '../actions/fetch';
const initialState = [];
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ENTITIES:
            return action.payload;
        case CREATE_ENTITY:
            return [...state, action.payload];
        default:
            return state;
    }
    return state;
}