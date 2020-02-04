import * as loadingReducers from './loading';
import {combineReducers} from 'redux';

export default combineReducers(Object.assign(
    loadingReducers
));