import { SHOW_ERROR, SHOW_RESPONSE } from '../actions/branchAction';
import branchInitStates from './initialStates/branchStates';

export default function branchReducer(state = branchInitStates, action = {}) {
    switch (action.type) {
        case SHOW_RESPONSE:
            return {
                branchList: action.payload,
                loading: false
            };
        case SHOW_ERROR:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}