import * as types from '../types';

const initialState = [];

export function stats(state = initialState, action) {
    switch (action.type) {
        case types.SET_STATS:
            return [...action.payload]
        case types.DELETE_STAT: 
            return "empty";
            //state.filter(item => item.alpha2Code !== action.payload.alpha2Code)
        default:
            return state;
    }
}
