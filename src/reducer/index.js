
import {combineReducers} from 'redux';
import UserReducer from './user.js';

const allReducer = combineReducers({
   user: UserReducer 
});

export default allReducer;